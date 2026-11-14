import { heroui } from "@heroui/react";

/** @type {import('tailwindcss').Config} */
export default {
	content: [
		"./app/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
		"./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			// next/font only defines the CSS variables (layout.tsx); without this
			// mapping `font-sans` falls back to the OS font and the chosen family is
			// never used.
			fontFamily: {
				sans: ["var(--font-sans)", "system-ui", "sans-serif"],
				mono: ["var(--font-mono)", "ui-monospace", "monospace"],
			},
		},
	},
	darkMode: "class",
	// Graphite neutrals: surfaces stay grey so the content (product screenshots)
	// carries the color. Primary keeps HeroUI's default blue as the one accent.
	//
	// `foreground` must stay a full 50-900 scale: a bare string here drops the
	// shades, and every text-foreground-500/600 then silently renders in the
	// primary text color. Text roles: DEFAULT = primary, 600 = secondary
	// (paragraphs), 500 = muted (labels, meta). Contrast on the page background:
	// light 600 7.5:1, 500 5.1:1; dark 600 7.3:1, 500 5.3:1.
	plugins: [
		heroui({
			themes: {
				light: {
					colors: {
						background: "#fafafa",
						foreground: {
							50: "#f5f5f5",
							100: "#e5e5e5",
							200: "#d4d4d4",
							300: "#a3a3a3",
							400: "#8a8a8a",
							500: "#6b6b6b",
							600: "#525252",
							700: "#404040",
							800: "#262626",
							900: "#171717",
							DEFAULT: "#171717",
						},
						content1: "#ffffff",
						content2: "#f4f4f5",
						divider: "rgba(23, 23, 23, 0.10)",
					},
				},
				dark: {
					colors: {
						background: "#141415",
						// Same roles, mirrored: higher shade = closer to the text color.
						foreground: {
							50: "#1c1c1e",
							100: "#262628",
							200: "#3a3a3c",
							300: "#555557",
							400: "#6e6e70",
							500: "#8a8a8a",
							600: "#a3a3a3",
							700: "#c4c4c4",
							800: "#dcdcdc",
							900: "#ededed",
							DEFAULT: "#ededed",
						},
						content1: "#19191b",
						content2: "#232325",
						divider: "rgba(237, 237, 237, 0.10)",
					},
				},
			},
		}),
	],
};