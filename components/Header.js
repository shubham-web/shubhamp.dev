import { Component } from "react";
import NextImage from "next/image";
import styled from "styled-components";
import { StyledButton, NavButton } from "./Styled/Button";

class Header extends Component {
	constructor(props) {
		super(props);
		this.buttons = [
			{ href: "/", label: "Home" },
			{ href: "/work", label: "Work" },
			{ href: "/contact", label: "Contact" },
		];

		this.state = {
			activePage: "/",
		};
	}
	render() {
		return (
			<Wrapper>
				<Logo>
					<NextImage src="/logo.png" width={75} height={75} />
				</Logo>
				<div className="orangeBlob">
					<NextImage src="/images/decoration/orange-blob.png" width={322} height={266} />
				</div>
				<Navigation>
					{this.buttons.map((ob) => {
						return (
							<NavButton
								key={ob.href}
								onClick={() => {
									this.setState({
										activePage: ob.href,
									});
								}}
								active={this.state.activePage === ob.href}
							>
								{ob.label}
							</NavButton>
						);
					})}
				</Navigation>
			</Wrapper>
		);
	}
}
const Logo = styled.div``;
const Wrapper = styled.header`
	display: grid;
	grid-template-columns: 1fr 0.7fr;
	align-items: center;
	padding: 1rem;
	position: relative;
	height: 100px;
	z-index: 1;
	& .orangeBlob {
		position: absolute;
		top: -120%;
		left: 46%;
		z-index: -1;
	}
`;
const Navigation = styled.nav`
	display: grid;
	grid-template-columns: 1fr 1fr 1fr;
	justify-content: center;
	gap: 2rem;
	& > * {
		max-width: 200px;
	}
`;

export default Header;
