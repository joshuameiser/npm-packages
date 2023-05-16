import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "@joshuameiser/template-components";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<typeof Button> = {
	title: "Example/Button",
	component: Button,
	// This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
	tags: ["autodocs"],
	// More on argTypes: https://storybook.js.org/docs/react/api/argtypes
	// argTypes: {
	// 	children: { control: "text" },
	// 	baseColor: {
	// 		control: {
	// 			type: "select",
	// 			options: ["primary", "secondary", "tertiary"],
	// 		},
	// 	},
	// 	type: {
	// 		control: { type: "select", options: ["button", "submit", "reset"] },
	// 	},
	// },
};

export default meta;
type Story = StoryObj<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
export const Primary: Story = {
	// More on args: https://storybook.js.org/docs/react/writing-stories/args
	args: {
		children: "Button",
	},
};

export const Secondary: Story = {
	args: {
		children: "Button",
	},
};

export const Large: Story = {
	args: {
		children: "Button",
	},
};

export const Small: Story = {
	args: {
		children: "Button",
	},
};
