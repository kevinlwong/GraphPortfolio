# 🌐 Interactive Graph Portfolio

A dynamic, interactive portfolio built with **React**, **TypeScript**, **D3.js**, and **Tailwind CSS v3**. This portfolio visualizes professional experience, skills, projects, coursework, and personal interests as an interactive force-directed graph.

![Portfolio Preview](https://img.shields.io/badge/React-19.1.1-61DAFB?logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.9.3-3178C6?logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.0-38B2AC?logo=tailwind-css&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-7.1.7-646CFF?logo=vite&logoColor=white)

---

## Features

### **Dynamic Node Expansion**
- Click on **experience nodes** (roles like "Data Analytics Intern," "Tech Fellow") to expand and reveal connected skills
- Click again to collapse and hide those skills
- Non-experience nodes (skills, projects, hobbies) show details in the sidebar when clicked

### **Dual Theme Support**
- **Light Mode**: Tan background (`#FFDBAB`) with black text and colorful nodes
- **Dark Mode**: Dark gray background (`#1E1E1E`) with purple accent tones
- Theme preference persists in `localStorage`
- Smooth transitions between themes (`transition-colors duration-300`)

### **Type-Based Node Coloring**
Each node type has distinct colors that adapt to the current theme:
- **Skills**: Orange/Amber
- **Projects**: Blue
- **Courses**: Green
- **Experience**: Red
- **Education**: Purple
- **Certifications**: Cyan
- **Personal**: Pink
- **Interests**: Orange

### **Interactive Graph Visualization**
- Powered by **D3.js** force simulation for natural, physics-based layouts
- Draggable nodes with boundary constraints
- Real-time link highlighting
- Smooth animations for expand/collapse actions

### **Responsive Design**
- Fixed sidebar (320px) with scrollable content
- Adaptive graph canvas that fills remaining space
- Tailwind CSS utilities for consistent styling

---

## Getting Started

### Prerequisites
- **Node.js** 18+ and **Yarn**

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/kevinlwong/kevin-graph-portfolio.git
   cd kevin-graph-portfolio
   ```

2. **Install dependencies**
   ```bash
   yarn install
   ```

3. **Run the development server**
   ```bash
   yarn dev
   ```
   Open [http://localhost:5173](http://localhost:5173) in your browser.

4. **Build for production**
   ```bash
   yarn build
   ```
   Output will be in the `dist/` folder.

5. **Preview the production build**
   ```bash
   yarn preview
   ```

---

## Project Structure

```
kevin-graph-portfolio/
├── src/
│   ├── components/
│   │   └── ThemeToggle.tsx       # Light/Dark mode toggle button
│   ├── data/
│   │   └── graphData.ts          # Portfolio data (nodes & links)
│   ├── App.tsx                   # Main application component
│   ├── main.tsx                  # React entry point
│   └── index.css                 # Global styles + Tailwind imports
├── public/
│   └── vite.svg                  # Favicon
├── tailwind.config.js            # Tailwind configuration (dark mode, colors)
├── vite.config.ts                # Vite configuration
├── tsconfig.json                 # TypeScript configuration
├── package.json                  # Dependencies and scripts
└── README.md                     # This file
```

---

## Tech Stack

| Technology | Purpose |
|------------|---------|
| **React 19** | UI framework with modern hooks |
| **TypeScript** | Type-safe JavaScript |
| **Vite 7** | Fast build tool with HMR |
| **D3.js** (via `react-force-graph-2d`) | Force-directed graph visualization |
| **Tailwind CSS 3** | Utility-first styling with dark mode |
| **PostCSS + Autoprefixer** | CSS processing |

---

## Data Structure

Graph data is defined in `src/data/graphData.ts`:

```typescript
export const graphData: GraphData = {
  nodes: [
    {
      id: "Kevin Wong",
      type: "personal",
      label: "Kevin Wong",
      description: "Software Engineer | AI & Data Enthusiast",
      link: "https://portfolio-kevinlwong.vercel.app",
    },
    // ... more nodes
  ],
  links: [
    { source: "Kevin Wong", target: "Cal Poly Pomona" },
    { source: "Hyundai AutoEver America", target: "Python" },
    // ... more links
  ],
};
```

### Node Types
- `personal`: Core identity node
- `experience`: Work roles and internships
- `project`: Personal projects
- `skill`: Technical skills
- `course`: Academic coursework
- `education`: Degrees and institutions
- `certification`: Professional certifications
- `interest`: Hobbies and personal interests

---

## Customization

### Adding New Nodes
Edit `src/data/graphData.ts`:
```typescript
{
  id: "New Project",
  type: "project",
  label: "My Awesome Project",
  description: "Built with React and Node.js",
  link: "https://github.com/username/project",
}
```

### Changing Theme Colors
Edit `tailwind.config.js`:
```javascript
extend: {
  colors: {
    tan: '#FFDBAB',           // Light mode background
    'dark-bg': '#1E1E1E',     // Dark mode background
    'purple-accent': '#7E57C2', // Dark mode accent
    // ... add custom colors
  },
}
```

### Adjusting Graph Physics
In `src/App.tsx`, modify D3 force parameters:
```typescript
fg.d3Force("link")?.distance(200);  // Link distance
fg.d3Force("charge")?.strength(-500); // Repulsion strength
```

---

## Key Interactions

| Action | Behavior |
|--------|----------|
| **Click experience node** | Expand/collapse connected skills |
| **Click other nodes** | Show details in sidebar |
| **Drag nodes** | Reposition nodes (they stay in place) |
| **Toggle theme** | Switch between light and dark modes |
| **Hover over nodes** | See node labels |

---

## Scripts

```bash
yarn dev       # Start development server (http://localhost:5173)
yarn build     # Build for production (output: dist/)
yarn preview   # Preview production build locally
yarn lint      # Run ESLint
```

---

## Features in Detail

### 1. **Expand/Collapse Mechanism**
When clicking an experience node:
```typescript
const handleNodeClick = (node: NodeObject) => {
  const graphNode = node as GraphNode;

  if (graphNode.type === 'experience') {
    // Toggle expansion state
    setExpandedNodes((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(graphNode.id)) {
        newSet.delete(graphNode.id); // Collapse
      } else {
        newSet.add(graphNode.id);    // Expand
      }
      return newSet;
    });
  } else {
    setSelected(graphNode); // Show in sidebar
  }
};
```

### 2. **Dynamic Graph Data**
The graph data is computed based on which nodes are expanded:
```typescript
const graphData = useMemo(() => {
  const nodes = [...staticGraphData.nodes];
  const links = [...staticGraphData.links];

  expandedNodes.forEach((expandedId) => {
    // Add connected skill nodes for expanded experiences
    // Add corresponding links
  });

  return { nodes, links };
}, [expandedNodes]);
```

### 3. **Theme Toggle**
Implemented in `src/components/ThemeToggle.tsx`:
- Checks system preference on mount
- Toggles `dark` class on `<html>` element
- Persists preference in `localStorage`
- Smooth icon transitions (sun ↔ moon)



---

## Author

**Kevin Wong**
- Portfolio: [https://portfolio-kevinlwong.vercel.app](https://portfolio-kevinlwong.vercel.app)
- GitHub: [@kevinlwong](https://github.com/kevinlwong)

---


## 📧 Contact

For questions or feedback, feel free to [open an issue](https://github.com/kevinlwong/kevin-graph-portfolio/issues) or reach out via my portfolio.

---


