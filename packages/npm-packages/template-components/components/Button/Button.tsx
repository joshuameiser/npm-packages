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

/**
 * CSS class names for the Button component.
 * @name buttonClasses
 * @property {string} root - The class name for the root element of the component.
 * @property {string} ripple - The class name for the ripple effect.
 * @property {string} content - The class name for the content of the button.
 */
export const buttonClasses = {
	root: "buttonClasses-root",
	ripple: "buttonClasses-ripple",
	content: "buttonClasses-content",
};

// TODO: Add a disabled state
/**
 * ButtonProps
 * @param {ReactNode} children - The content of the button.
 * @param {(event: React.MouseEvent<HTMLButtonElement>) => void} onClick - The function to execute on button click.
 * @param {types["baseColor"]} [baseColor="primary"] - The base color of the button.
 * @param {string} [className] - Additional class name of the button.
 * @param {"button" | "submit" | "reset"} [type="button"] - The type of the button.
 */
export interface ButtonProps {
	/**
	 * The content of the button.
	 * @type ReactNode
	 */
	children: ReactNode;

	/**
	 * The function to execute on button click.
	 * @type (event: React.MouseEvent<HTMLButtonElement>) => void
	 * @optional
	 */
	onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;

	/**
	 * The base color of the button.
	 * @default primary
	 * @optional
	 */
	baseColor?: types["baseColor"];

	/**
	 * Additional class name for the button.
	 * @type string | undefined
	 * @optional
	 */
	className?: string;

	/**
	 * The type of the button.
	 * @type "button" | "submit" | "reset" | undefined
	 * @optional
	 */
	type?: "button" | "submit" | "reset";
}

/**
 * A custom button component with ripple effect on click.
 * @name Button
 * @param {ButtonProps} props - Properties to configure the button.
 * @returns {JSX.Element} - The rendered button element.
 */
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
			onClick={(event: MouseEvent<HTMLButtonElement>) => {
				const rect = event.currentTarget.getBoundingClientRect();
				setCoords({
					x: event.clientX - rect.left,
					y: event.clientY - rect.top,
				});
				props.onClick && props.onClick(event);
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
