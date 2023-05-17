import React, {
	ReactNode,
	MouseEvent,
	useEffect,
	useState,
	useRef,
} from "react";
import styled from "styled-components";
import { types } from "../../data/types";

const transition = "0.2s ease-in-out";

const ButtonWrapper = styled.button<{
	baseColor?: types["baseColor"];
}>`
	border-radius: 8px;
	border: none;
	padding: 16px 24px;
	background-color: var(--${(p) => p.baseColor}Color);
	color: var(--${(p) => p.baseColor}Color-900);
	/* clip the shadows at the border radius */
	overflow: hidden;
	position: relative;
	cursor: pointer;
	transition: ${transition};

	:hover {
		background: var(--${(p) => p.baseColor}Hover);
	}
`;

const RippleEffect = styled.span<{
	buttonWidth: number;
	baseColor: types["baseColor"];
}>`
	width: ${(p) => p.buttonWidth / 8}px;
	height: ${(p) => p.buttonWidth / 8}px;
	position: absolute;
	background-color: var(--${(p) => p.baseColor}Color);
	display: block;
	content: "";
	border-radius: 9999px;
	opacity: 1;
	animation: 1.5s ease 1 forwards ripple-effect;

	@keyframes ripple-effect {
		0% {
			transform: scale(1);
			opacity: 1;
		}
		50% {
			transform: scale(15);
			opacity: 0.375;
		}
		100% {
			transform: scale(50);
			opacity: 0;
		}
	}
`;

const Content = styled.span`
	position: relative;
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 1.25rem;
	user-select: none;
	transition: ${transition};
`;

export const buttonClasses = {
	root: "buttonClasses-root",
	ripple: "buttonClasses-ripple",
	content: "buttonClasses-content",
};

export interface ButtonProps {
	children: ReactNode;
	onClick: Function;
	baseColor?: types["baseColor"];
	className?: string;
	type?: "button" | "submit" | "reset";
}

export const Button = (props: ButtonProps) => {
	const baseColor: types["baseColor"] = props.baseColor ?? "primary";
	const ButtonRef = useRef<HTMLButtonElement>(null);
	const [coords, setCoords] = useState({ x: -1, y: -1 });
	const [isRippling, setIsRippling] = useState(false);

	useEffect(() => {
		if (coords.x !== -1 && coords.y !== -1) {
			setIsRippling(true);
			setTimeout(() => setIsRippling(false), 300);
		} else setIsRippling(false);
	}, [coords]);

	useEffect(() => {
		if (!isRippling) setCoords({ x: -1, y: -1 });
	}, [isRippling]);

	return (
		<ButtonWrapper
			// props.className must be passed on so that the component can be styled by styled-components by the end user
			className={`${buttonClasses.root} ${props.className}`}
			ref={ButtonRef}
			type={props.type ?? "button"}
			baseColor={baseColor}
			onClick={(event: MouseEvent<HTMLElement>) => {
				const rect = event.currentTarget.getBoundingClientRect();
				setCoords({
					x: event.clientX - rect.left,
					y: event.clientY - rect.top,
				});
				props.onClick(event);
			}}>
			{isRippling ? (
				<RippleEffect
					className={buttonClasses.ripple}
					baseColor={baseColor}
					buttonWidth={ButtonRef.current?.clientWidth ?? 0}
					style={{ left: coords.x, top: coords.y }}
				/>
			) : (
				""
			)}
			<Content className={buttonClasses.content}>{props.children}</Content>
		</ButtonWrapper>
	);
};
