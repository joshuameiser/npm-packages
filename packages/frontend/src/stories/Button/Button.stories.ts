import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "@joshuameiser/template-components";
// import { docsPage } from "@storybook/addon-docs/blocks";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<typeof Button> = {
	title: "template-components/Button",
	component: Button,
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
		baseColor: "secondary",
	},
};

export const Tertiary: Story = {
	args: {
		children: "Button",
		baseColor: "tertiary",
	},
};
