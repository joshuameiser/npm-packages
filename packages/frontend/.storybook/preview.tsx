import React from "react";
import darkTheme from "./darkTheme";
import { Preview } from "@storybook/react";
import {
	Title,
	Subtitle,
	Description,
	Primary,
	Controls,
	Stories,
} from "@storybook/blocks";
import "../src/data/darkMode.scss";
import "../src/index.css";
import "../src/assets/fonts.css";

export const decorators = [
	(Story: React.ComponentType) => (
		<div data-theme="dark-mode">
			<Story />
		</div>
	),
];

const preview: Preview = {
	parameters: {
		actions: { argTypesRegex: "^on[A-Z].*" },
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/,
			},
		},
		backgrounds: { default: "dark" },
		docs: {
			controls: { exclude: ["onClick"] },
			theme: darkTheme,
			page: () => (
				<>
					<Title />
					<Subtitle />
					<Description />
					<Primary />
					<Controls />
					<Stories />
				</>
			),
		},
	},
};

export default preview;
