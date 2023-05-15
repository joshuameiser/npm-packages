import React, { ReactNode, useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import clsx from "clsx";
import { types } from "../../data/types";

export const dropdownClasses = {
	root: "dropdownClasses-root",
	heading: "dropdownClasses-heading",
	content: "dropdownClasses-content",
};

const Wrapper = styled.div<{
	maxWidth?: number;
	baseColor: types["baseColor"];
	lightVariant: boolean;
}>`
	height: auto;
	width: 100%;
	text-align: left;
	${(p) => p.maxWidth && `max-width: ${p.maxWidth}px;`}

	display: flex;
	flex-direction: column;
	& .${dropdownClasses.heading} {
		color: var(--${(p) => p.baseColor}Color${(p) => p.lightVariant && "-900"});
		& rect {
			fill: var(--${(p) => p.baseColor}Color${(p) => p.lightVariant && "-900"});
		}
	}
	&:hover {
		& .${dropdownClasses.heading} {
			color: var(
				--${(p) => p.baseColor}${(p) =>
						p.lightVariant ? "Color-800" : "Hover"}
			);
			& rect {
				fill: var(
					--${(p) => p.baseColor}${(p) =>
							p.lightVariant ? "Color-800" : "Hover"}
				);
			}
		}
	}
`;

const ContentWrapper = styled(motion.div)`
	height: 0px;
	overflow: hidden;
	display: flex;
	flex-direction: column;
`;

const SVG = styled(motion.svg)`
	cursor: pointer;
	overflow: visible;
	& rect {
		cursor: pointer;
	}
	height: 20px;
	width: 20px;
`;

const Heading = styled.h2`
	display: flex;
	align-items: center;
	gap: 16px;
	cursor: pointer;
	user-select: none;
	min-width: 350px;
	margin: 0;

	& svg {
		font-size: 2.5rem;
	}
`;

const DescriptionOpener = (props: { clicked: boolean }) => (
	<SVG
		xmlns="http://www.w3.org/2000/svg"
		transition={{ duration: 1 }}
		className={dropdownClasses.heading}
		viewBox="0 0 20 20">
		<motion.rect
			animate={props.clicked ? { rotate: 180 } : { rotate: 0 }}
			className="plus-line"
			width="20"
			height="2"
			y="9"
		/>
		<motion.rect
			animate={props.clicked ? { rotate: 270 } : { rotate: 0 }}
			width="2"
			height="20"
			x="9"
		/>
	</SVG>
);

// TODO: Should I add the option to add access to whether the dropdown is open or not?
export interface DropdownProps {
	title: string;
	children: ReactNode;
	duration?: number;
	maxWidth?: number;
	className?: string;
	baseColor?: types["baseColor"];
	lightVariant?: boolean;
}

export const Dropdown = (props: DropdownProps) => {
	const [isOpen, setIsOpen] = useState(false);
	const baseColor = props.baseColor ?? "secondary";
	const lightVariant = props.lightVariant ?? true;

	return (
		<Wrapper
			baseColor={baseColor}
			lightVariant={lightVariant}
			maxWidth={props.maxWidth}
			className={clsx(props.className, dropdownClasses.root)}>
			<Heading
				className={dropdownClasses.heading}
				onClick={() => {
					setIsOpen(!isOpen);
				}}>
				{props.title}
				<DescriptionOpener clicked={isOpen} />
			</Heading>
			<ContentWrapper
				className={dropdownClasses.content}
				transition={{ duration: props.duration ?? 0.6 }}
				animate={
					isOpen
						? {
								height: "auto",
						  }
						: {
								height: 0,
						  }
				}>
				{props.children}
			</ContentWrapper>
		</Wrapper>
	);
};
