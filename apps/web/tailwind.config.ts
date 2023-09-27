import { Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{ts,tsx,css}"],
  theme: {
    extend: {
      backgroundColor: {
        base: "hsl(var(--bg-base), <alpha-value>)",
        primary: "hsl(var(--bg-primary), <alpha-value>)",
        secondary: "hsl(var(--bg-secondary), <alpha-value>)",
        muted: "hsl(var(--bg-muted), <alpha-value>)",
        accent: "hsl(var(--bg-accent), <alpha-value>)",
        destructive: "hsl(var(--bg-destructive), <alpha-value>)",
      },
      textColor: {
        base: "hsl(var(--text-base), <alpha-value>)",
        primary: "hsl(var(--text-primary), <alpha-value>)",
        secondary: "hsl(var(--text-secondary), <alpha-value>)",
        muted: "hsl(var(--text-muted), <alpha-value>)",
        accent: "hsl(var(--text-accent), <alpha-value>)",
        destructive: "hsl(var(--text-destructive), <alpha-value>)",
      },
      borderColor: {
        base: "hsl(var(--border-base), <alpha-value>)",
      },
    },
  },
} satisfies Config;
