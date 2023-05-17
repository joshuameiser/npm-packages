import React, { ReactNode } from "react";
import styled from "styled-components";
import clsx from "clsx";

const ImageWrapper = styled.div`
	position: relative;
	min-height: 120vh;
	width: inherit;
	overflow: hidden; // Hide any child content that extends outside this element
	clip-path: inset(0); // Ensure the entire element is visible
`;

const Image = styled.img`
	height: 100vh;
	width: 100%;
	transition: 0.4s ease-in-out;
	object-fit: cover; // Scale the image to cover the entire element, maintaining aspect ratio
	position: fixed;
	z-index: -2;
	top: 0px;
	left: 0px;
`;

const Wrapper = styled.div`
	position: relative;
	width: inherit;
	height: inherit;
`;

/**
 * CSS class names for the ParallaxSection component.
 * @name parallaxSectionClasses
 * @property {string} root - The class name for the root element of the component.
 * @property {string} imageOne - The class name for the first image.
 * @property {string} imageTwo - The class name for the second image.
 */
export const parallaxSectionClasses = {
	root: "parallaxSectionClasses-root",
	imageOne: "parallaxSectionClasses-imageOne",
	imageTwo: "parallaxSectionClasses-imageTwo",
};

/**
 * Props for the ParallaxSection component.
 * @name ParallaxSectionProps
 */
export interface ParallaxSectionProps {
	/**
	 * The URL of the image for the first page.
	 * @type string
	 */
	imageOne: string;

	/**
	 * The URL of the image for the second page.
	 * @type string
	 */
	imageTwo: string;

	/**
	 * The divider between the two pages.
	 * @type ReactNode
	 * @optional
	 */
	divider: ReactNode;

	/**
	 *The content for the first page.
	 * @type ReactNode
	 * @optional
	 */
	pageOneContent?: ReactNode;

	/**
	 * The content for the second page.
	 * @type ReactNode
	 */
	pageTwoContent?: ReactNode;

	/**
	 * Additional class name for the component.
	 * @type string
	 * @optional
	 */
	className?: string;
}

/**
 * @name ParallaxSection
 * @description A component that displays two pages with a parallax effect.
 * @param {ParallaxSectionProps} props - The props for the component.
 * @returns {JSX.Element} The rendered component.
 */
export const ParallaxSection = (props: ParallaxSectionProps) => {
	return (
		<Wrapper className={clsx(props.className, parallaxSectionClasses.root)}>
			<ImageWrapper>
				<Image
					className={parallaxSectionClasses.imageOne}
					src={props.imageOne}
				/>
				{props.pageOneContent}
			</ImageWrapper>
			{props.divider}
			<ImageWrapper>
				<Image
					className={parallaxSectionClasses.imageTwo}
					src={props.imageTwo}
				/>
				{props.pageTwoContent}
			</ImageWrapper>
		</Wrapper>
	);
};
