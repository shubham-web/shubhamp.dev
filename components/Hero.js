import { Component } from "react";
import styled from "styled-components";
import NextImage from "next/image";
import { StyledButton } from "./Styled/Button";

class Hero extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<Wrapper>
				<IntroWrapper>
					<Intro>
						<Greet>Hi, I Am</Greet>
						<PersonName>Shubham Prajapat</PersonName>
						<SubHeading>
							Full Stack Web Dev <Highlighted>Since 2018</Highlighted>
						</SubHeading>
						<MarketingButtonGroup>
							<HireMeButton>Hire Me</HireMeButton>
							<SkypeChatButton>
								<span className="icon">
									<NextImage src="/images/icons/skype.png" width={30} height={30} />
								</span>
								Chat
							</SkypeChatButton>
						</MarketingButtonGroup>
					</Intro>
				</IntroWrapper>
				<PortraitWrapper>
					<Portrait>
						<SocialHandles>
							<a id="gmail" href="mailto:shubhamp.developer@gmail.com">
								<NextImage width={35} height={35} src="/images/icons/gmail.svg" />
							</a>
							<a id="twitter" rel="noreferrer" target="_blank" href="https://twitter.com/shubhamp_web">
								<NextImage width={35} height={35} src="/images/icons/twitter.svg" />
							</a>
							<a
								id="linkedin"
								rel="noreferrer"
								target="_blank"
								href="https://www.linkedin.com/in/shubham-prajapat/"
							>
								<NextImage width={35} height={35} src="/images/icons/linkedin.svg" />
							</a>
							<a id="github" rel="noreferrer" target="_blank" href="https://github.com/shubham-web/">
								<NextImage width={35} height={35} src="/images/icons/github.svg" />
							</a>
						</SocialHandles>
						<PortraitImage>
							<NextImage draggable={false} src="/images/photo-circle.png" width={567} height={644} />
						</PortraitImage>
						<SilverMedalTag>
							<a
								rel="noreferrer"
								target="_blank"
								href="https://www.linkedin.com/posts/shubham-prajapat_indiaskills-activity-6887098459493548032-rias"
							>
								<NextImage
									draggable={false}
									width={60}
									height={75}
									src="/images/icons/silver-medal.png"
								/>
								<div className="texts">
									<h3>
										Silver Medalist <br /> in Web Tech
									</h3>
									<span>IndiaSkills 2021</span>
								</div>
							</a>
						</SilverMedalTag>
					</Portrait>
				</PortraitWrapper>
			</Wrapper>
		);
	}
}

// Styled Components
const Wrapper = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr;
	min-height: calc(100vh - 100px);
`;

const Intro = styled.div`
	padding: 1rem;
	padding-bottom: 10rem;
`;
const Greet = styled.h3`
	font-size: 2rem;
	font-family: var(--funky);
	line-height: normal;
	color: #ffa900;
	font-size: 60px;
	line-height: 60px;
	margin-bottom: 1rem;
`;
const PersonName = styled.h2`
	font-size: 2rem;
	font-family: var(--funky);
	line-height: normal;
	color: #7868e6;
	font-size: 70px;
	line-height: 70px;
	font-weight: bold;
`;
const SubHeading = styled.h1`
	font-size: 1rem;
	font-family: var(--professional);
	font-weight: lighter;
	font-size: 36px;
	margin: 2.2rem 0;
`;
const MarketingButtonGroup = styled.div`
	padding: 1rem 0;
	display: flex;
	gap: 2rem;
`;
const Highlighted = styled.span`
	color: #7868e6;
`;
const HireMeButton = styled(StyledButton)`
	background-image: linear-gradient(-135deg, rgb(255, 169, 0) 0%, rgb(255, 108, 0) 100%);
	font-family: var(--professional);
	font-weight: 700;
	font-size: 26px;
	color: white;
	border-radius: 50px;
	border: none;
	box-shadow: 0 0 10px #ffa90050;
	padding: 1rem 2rem;
`;
const SkypeChatButton = styled(StyledButton)`
	color: #0092d3;
	font-family: var(--professional);
	font-weight: bold;
	background: white;
	display: flex;
	gap: 1rem;
	border-radius: 50px;
	font-size: 26px;
	padding: 0.8rem;
	padding-right: 1.6rem;
	& .icon {
		display: grid;
		justify-content: center;
		align-items: center;
		background: white;
		aspect-ratio: 1 / 1;
		padding: 10px;
		box-shadow: 0 0 10px #9a9a9a50;
		border-radius: 50%;
	}
`;

const IntroWrapper = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const PortraitWrapper = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
`;
const Portrait = styled.div`
	position: relative;
	display: inline-block;
	width: auto;
	width: max-content;
	height: max-content;
	margin: 0 auto;
`;
const PortraitImage = styled.div``;
const SocialHandles = styled.div`
	position: absolute;
	display: inline-block;
	width: 100%;
	height: 100%;
	z-index: 1;
	& > a {
		transform: translate(-50%, -50%);
		position: absolute;
		width: 60px;
		height: 60px;
		display: flex;
		justify-content: center;
		align-items: center;
		border-radius: 50%;
		backdrop-filter: blur(5px) saturate(150%);
		background-color: rgba(255, 255, 255, 0.5);
		border: 2px solid rgba(255, 255, 255, 0.6);
	}
	& > a#gmail {
		top: 30%;
		left: 10%;
	}
	& > a#twitter {
		top: 30%;
		left: 90%;
	}
	& > a#linkedin {
		top: 50%;
		left: 0;
	}
	& > a#github {
		top: 50%;
		left: 100%;
	}
`;

const SilverMedalTag = styled.div`
	position: absolute;
	background-color: rgba(255, 255, 255, 0.6);
	backdrop-filter: blur(15px) saturate(200%);
	transform: translate(-50%, -50%);
	border: 4px solid rgba(255, 255, 255, 0.6);
	top: 85%;
	left: 50%;
	border-radius: 25px;
	z-index: 1;
	& > a {
		display: flex;
		gap: 1rem;
		padding: 0 1rem 0 1rem;
		border-radius: 25px;
		align-items: flex-start;
	}
	& .texts {
		display: grid;
		align-items: center;
		justify-content: center;
		height: 100%;
		padding-top: 0.5rem;
		padding-bottom: 0.8rem;
		text-align: center;
		font-family: var(--standard);
	}
	& .texts h3 {
		color: #002626;
	}
	& .texts span {
		color: #6666ff;
	}
`;
export default Hero;
