import { useState, useRef, useEffect, useMemo } from "react";
import ForceGraph2D, {
  type NodeObject,
  type ForceGraphMethods,
} from "react-force-graph-2d";
import { graphData as staticGraphData, type GraphNode } from "./data/graphData";
import ThemeToggle from "./components/ThemeToggle";

export default function App() {
  const [selected, setSelected] = useState<GraphNode | null>(null);
  const fgRef = useRef<ForceGraphMethods>(null!);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [expandedNodes, setExpandedNodes] = useState<Set<string>>(new Set());

  // Build dynamic graph data based on expanded nodes
  const graphData = useMemo(() => {
    const nodes = [...staticGraphData.nodes];
    const links = [...staticGraphData.links];

    // For each expanded experience node, add its connected skill nodes
    expandedNodes.forEach((expandedId) => {
      const expandedNode = staticGraphData.nodes.find((n: any) => n.id === expandedId);
      if (expandedNode?.type === 'experience') {
        // Find all skills connected to this experience
        const connectedSkills = staticGraphData.links
          .filter((link: any) => link.source === expandedId || (typeof link.source === 'object' && link.source.id === expandedId))
          .map((link: any) => {
            const targetId = typeof link.target === 'string' ? link.target : link.target.id;
            return staticGraphData.nodes.find((n: any) => n.id === targetId);
          })
          .filter((node: any) => node?.type === 'skill');

        // Add these skill nodes if not already present
        connectedSkills.forEach((skill: any) => {
          if (!nodes.find((n: any) => n.id === skill.id)) {
            nodes.push({ ...skill, __isExpanded: true });
          }
        });

        // Add links for expanded skills
        staticGraphData.links.forEach((link: any) => {
          const sourceId = typeof link.source === 'string' ? link.source : link.source.id;
          const targetId = typeof link.target === 'string' ? link.target : link.target.id;

          if (sourceId === expandedId && connectedSkills.find((s: any) => s.id === targetId)) {
            if (!links.find((l: any) => {
              const lSourceId = typeof l.source === 'string' ? l.source : l.source.id;
              const lTargetId = typeof l.target === 'string' ? l.target : l.target.id;
              return lSourceId === sourceId && lTargetId === targetId;
            })) {
              links.push(link);
            }
          }
        });
      }
    });

    return { nodes, links };
  }, [expandedNodes]);

  const handleNodeClick = (node: NodeObject) => {
    const graphNode = node as GraphNode;

    // If it's an experience node, toggle expand/collapse
    if (graphNode.type === 'experience') {
      setExpandedNodes((prev) => {
        const newSet = new Set(prev);
        if (newSet.has(graphNode.id)) {
          newSet.delete(graphNode.id);
        } else {
          newSet.add(graphNode.id);
        }
        return newSet;
      });
    } else {
      // For non-experience nodes, show in sidebar
      setSelected(graphNode);
    }
  };

  useEffect(() => {
    const fg = fgRef.current;
    if (fg) {
      // Set custom forces for better spreading
      fg.d3Force("link")?.distance(200);
      fg.d3Force("charge")?.strength(-500);
    }

    // Listen for theme changes
    const checkDarkMode = () => {
      setIsDarkMode(document.documentElement.classList.contains("dark"));
    };

    checkDarkMode();
    const observer = new MutationObserver(checkDarkMode);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="flex h-screen bg-tan dark:bg-dark-bg text-black dark:text-purple-200 overflow-hidden transition-colors duration-300">
      <ThemeToggle />

      {/* Graph Section */}
      <div className="flex-1 relative overflow-hidden">
        <ForceGraph2D
          ref={fgRef}
          graphData={graphData}
          nodeAutoColorBy="type"
          backgroundColor="transparent"
          linkColor={() =>
            isDarkMode ? "rgba(126,87,194,0.4)" : "rgba(0,0,0,0.3)"
          }
          d3AlphaDecay={0.02}
          d3VelocityDecay={0.6}
          nodeRelSize={20}
          nodeCanvasObject={(node: NodeObject, ctx, globalScale) => {
            const graphNode = node as GraphNode;
            const label = graphNode.label;
            const fontSize = 12 / globalScale;
            ctx.font = `${fontSize}px Sans-Serif`;

            // Text color: black in light mode, purple in dark mode
            ctx.fillStyle = isDarkMode ? "#7E57C2" : "#000000";
            ctx.textAlign = "center";
            ctx.fillText(label, node.x!, node.y! + 12);
            ctx.beginPath();
            ctx.arc(node.x!, node.y!, 8, 0, 2 * Math.PI, false);

            // Color mapping based on node type and theme
            const nodeTypeColors: Record<string, { light: string; dark: string }> = {
              skill: { light: '#F59E0B', dark: '#FBBF24' },
              project: { light: '#2563EB', dark: '#3B82F6' },
              course: { light: '#16A34A', dark: '#22C55E' },
              experience: { light: '#DC2626', dark: '#EF4444' },
              education: { light: '#7C3AED', dark: '#A78BFA' },
              certification: { light: '#0891B2', dark: '#22D3EE' },
              personal: { light: '#DB2777', dark: '#F472B6' },
              interest: { light: '#EA580C', dark: '#FB923C' },
            };

            const nodeType = graphNode.type || 'interest';
            const colors = nodeTypeColors[nodeType] || nodeTypeColors.interest;

            // Visual indicator for expanded experience nodes
            const isExpanded = expandedNodes.has(graphNode.id);

            if (node === selected) {
              // Selected nodes: white in light mode, pastel yellow in dark mode
              ctx.fillStyle = isDarkMode ? "#FFF9C4" : "#FFFFFF";
            } else {
              // Unselected nodes: color by type
              ctx.fillStyle = isDarkMode ? colors.dark : colors.light;
            }
            ctx.fill();

            // Add ring around expanded nodes
            if (isExpanded && graphNode.type === 'experience') {
              ctx.beginPath();
              ctx.arc(node.x!, node.y!, 12, 0, 2 * Math.PI, false);
              ctx.strokeStyle = isDarkMode ? "#FFF9C4" : "#000000";
              ctx.lineWidth = 2;
              ctx.stroke();
            }
          }}
          onNodeClick={handleNodeClick}
          enableNodeDrag={true}
          cooldownTime={2000}
          d3AlphaMin={0.001}
        />
      </div>

      {/* Sidebar */}
      <div className="w-80 h-screen bg-tan dark:bg-gray-900/90 backdrop-blur-md border-l border-gray-300 dark:border-gray-700 p-4 flex flex-col overflow-y-auto flex-shrink-0 transition-colors duration-300">
        <h2 className="text-xl font-bold mb-4 text-black dark:text-purple-accent">
          Details
        </h2>
        {selected ? (
          <div className="space-y-2">
            <p className="text-lg font-semibold text-black dark:text-purple-200">
              {selected.label}
            </p>
            <p className="text-sm text-gray-700 dark:text-purple-300">
              {selected.description}
            </p>
            {selected.link && (
              <a
                href={selected.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-accent dark:text-purple-400 underline hover:text-purple-700 dark:hover:text-purple-300 transition-colors duration-200"
              >
                View More
              </a>
            )}
          </div>
        ) : (
          <p className="text-gray-600 dark:text-purple-300">
            Click a node to see details.
          </p>
        )}
      </div>
    </div>
  );
}
