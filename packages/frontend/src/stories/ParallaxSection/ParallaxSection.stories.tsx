import type { Meta, StoryObj } from "@storybook/react";
import { ParallaxSection } from "@joshuameiser/template-components";
import Image1 from "../assets/images/image1.png";
import Image2 from "../assets/images/image2.png";

const meta: Meta<typeof ParallaxSection> = {
	title: "template-components/ParallaxSection",
	component: ParallaxSection,
};

export default meta;
type Story = StoryObj<typeof ParallaxSection>;

export const Primary: Story = {
	args: {
		imageOne: Image1,
		imageTwo: Image2,
		divider: (
			<div
				style={{ height: "20px", width: "100%", backgroundColor: "purple" }}
			/>
		),
		pageOneContent: (
			<div
				style={{
					height: "200vh",
					width: "100%",
					display: "flex",
					flexDirection: "column",
					justifyContent: "center",
					alignItems: "center",
					color: "white",
				}}>
				<h1>Page 1</h1>
			</div>
		),
		pageTwoContent: (
			<div
				style={{
					height: "100vh",
					width: "100%",
					display: "flex",
					flexDirection: "column",
					justifyContent: "center",
					alignItems: "center",
					color: "white",
				}}>
				<h1>Page 2</h1>
			</div>
		),
	},
};
