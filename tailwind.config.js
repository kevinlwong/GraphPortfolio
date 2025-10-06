/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        tan: '#FFDBAB',
        'dark-bg': '#1E1E1E',
        'purple-accent': '#7E57C2',
        'pastel-yellow': '#FFF9C4',
        skill: {
          light: '#F59E0B',
          dark: '#FBBF24',
        },
        project: {
          light: '#2563EB',
          dark: '#3B82F6',
        },
        course: {
          light: '#16A34A',
          dark: '#22C55E',
        },
        experience: {
          light: '#DC2626',
          dark: '#EF4444',
        },
        education: {
          light: '#7C3AED',
          dark: '#A78BFA',
        },
        certification: {
          light: '#0891B2',
          dark: '#22D3EE',
        },
        personal: {
          light: '#DB2777',
          dark: '#F472B6',
        },
        interest: {
          light: '#EA580C',
          dark: '#FB923C',
        },
      },
    },
  },
  plugins: [],
}

