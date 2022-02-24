import styled, { css } from "styled-components";

export const StyledButton = styled.button`
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 1rem;
	cursor: pointer;
	border: none;
`;

export const NavButton = styled(StyledButton)`
	border-radius: 15px;
	background: transparent;
	backdrop-filter: none;
	border: 3px solid transparent;
	border-color: transparent;
	text-transform: uppercase;
	font-size: 1.25rem;
	color: #333333;
	font-family: var(--professional);
	transition: 0.3s;

	${(props) =>
		props.active
			? css`
					background: rgba(255, 255, 255, 0.6);
					backdrop-filter: blur(15px) saturate(150%);
					border: 3px solid rgba(255, 255, 255, 0.6);
					box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
			  `
			: ``};
`;
