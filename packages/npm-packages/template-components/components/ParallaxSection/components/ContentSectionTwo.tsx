import React, { ReactNode } from "react";
import styled from "styled-components";

const ContentWrapper = styled.div`
	position: absolute;
	top: 0px;
	left: 0px;
	height: 100%;
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	z-index: 1;
	color: white;
	font-size: 3rem;
`;

const Wrapper = styled.div<{ minHeight?: number; backgroundColor?: string }>`
	width: 100%;
	position: relative;
	z-index: 1;
	display: flex;
	align-items: center;
	justify-content: center;
	height: auto;
	${(p) =>
		p.minHeight ? `min-height: ${p.minHeight}px;` : "min-height: 100px;"}
	padding: 64px 0;
	flex-direction: column;

	&::before {
		content: "";
		position: absolute;
		top: -10%;
		left: -50%;
		background-color: ${(p) =>
			p.backgroundColor ? p.backgroundColor : "var(--primaryColor)"};
		height: 120%;
		min-height: inherit;
		width: 200vw;
		transform: rotate(-3deg);
		z-index: -1;
	}

	// &::after {
	// 	content: "";
	// 	position: absolute;
	// 	top: -20px;
	// 	left: -50%;
	// 	background-color: purple;
	// 	height: 500px;
	// 	width: 200vw;
	// 	transform: rotate(-4deg);
	// }
`;

export interface ContentSectionTwoProps {
	content: ReactNode;
	wrapperWidth?: number;
	minHeight?: number;
	backgroundColor?: string;
	className?: string;
}

// TODO: Make a page for this component
export const ContentSectionTwo = (props: ContentSectionTwoProps) => {
	return (
		<Wrapper
			className={props.className}
			minHeight={props.minHeight}
			backgroundColor={props.backgroundColor}>
			<ContentWrapper>{props.content}</ContentWrapper>
		</Wrapper>
	);
};
