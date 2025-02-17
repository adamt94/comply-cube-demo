import type { Config } from "tailwindcss";

export default {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/features/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                background: "var(--background)",
                primary: "var(--primary)",
                secondary: "var(--secondary)",
                tertiary: "var(--tertiary)",
                onPrimary: "var(--onPrimary)",
                onBackground: "var(--onBackground)",
                error: "var(--error)",
                onErrorContainer: "var(--onErrorContainer)",
                surface: "var(--surface)",
                onSurface: "var(--onSurface)",
            },
        },
    },
    plugins: [],
} satisfies Config;
