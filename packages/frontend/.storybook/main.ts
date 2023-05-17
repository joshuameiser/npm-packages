import type { StorybookConfig } from "@storybook/react-vite";
const config: StorybookConfig = {
	stories: [
		"../src/**/*.mdx",
		"../src/**/**/*.mdx",
		"../src/**/*.stories.@(js|jsx|ts|tsx)",
		"../src/**/**/*.stories.@(js|jsx|ts|tsx)",
	],
	addons: [
		"@storybook/addon-links",
		"@storybook/addon-essentials",
		"@storybook/addon-interactions",
		"@storybook/preset-typescript",
	],
	framework: {
		name: "@storybook/react-vite",
		options: {},
	},
	docs: {
		autodocs: true,
		defaultName: "Component",
	},
};
export default config;
