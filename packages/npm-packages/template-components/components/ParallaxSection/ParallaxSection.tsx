import React, { ReactNode } from "react";
import styled from "styled-components";
import clsx from "clsx";

export const parallaxSectionClasses = {
	root: "parallaxSectionClasses-root",
	imageOne: "parallaxSectionClasses-imageOne",
	imageTwo: "parallaxSectionClasses-imageTwo",
};

export interface ParallaxSectionProps {
	imageOne: string;
	imageTwo: string;
	divider: ReactNode;
	className?: string;
}

const ImageWrapper = styled.div`
	position: relative;
	height: 120vh;
	width: inherit;
	overflow: hidden;
	clip-path: inset(0);
`;

const Image = styled.img`
	height: 100vh;
	width: 100%;
	transition: 0.4s ease-in-out;
	object-fit: cover;
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

export const ParallaxSection = (props: ParallaxSectionProps) => {
	return (
		<Wrapper className={clsx(props.className, parallaxSectionClasses.root)}>
			<ImageWrapper>
				<Image
					className={parallaxSectionClasses.imageOne}
					src={props.imageOne}
				/>
			</ImageWrapper>
			{props.divider}
			<ImageWrapper>
				<Image
					className={parallaxSectionClasses.imageTwo}
					src={props.imageTwo}
				/>
			</ImageWrapper>
		</Wrapper>
	);
};
