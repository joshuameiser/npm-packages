import type { Meta, StoryObj } from "@storybook/react";
import { Dropdown } from "@joshuameiser/template-components";

const children = <div style={{ color: "white" }}>This is some random text</div>;

const meta: Meta<typeof Dropdown> = {
	title: "template-components/Dropdown",
	component: Dropdown,
};

export default meta;
type Story = StoryObj<typeof Dropdown>;

export const Primary: Story = {
	args: {
		title: "Dropdown",
		children: children,
	},
};
