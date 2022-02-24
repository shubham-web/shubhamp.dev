import Head from "next/head";
import styled from "styled-components";
import Header from "./../components/Header";
import Hero from "./../components/Hero";

export default function Home() {
	return (
		<AppBorder>
			<Head>
				<title>Shubham Prajapat - Full Stack Web Developer</title>
				<meta
					name="description"
					content="Full Stack Web Developer Specialized in JavaScript. Having More Than 3 Years of Experience in Building Powerful and Unique Web Apps."
				/>
				<link rel="icon" href="/favicon.ico" />
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
				<link
					href="https://fonts.googleapis.com/css2?family=Baloo+Bhaina+2:wght@400;800&amp;family=Work+Sans:wght@300;400;500;700&amp;family=Montserrat:wght@300;400;700&amp;display=swap"
					rel="stylesheet"
				/>
			</Head>
			<Header />
			<Hero />
		</AppBorder>
	);
}

const AppBorder = styled.div`
	background: #f6f6f6;
	box-sizing: border-box;
	overflow: hidden;
	@media (min-width: 1600px) {
		max-width: 1600px;
		margin: 0 auto;
		margin-top: 4rem;
		margin-bottom: 4rem;
		/* border-radius: 2rem; */
		box-shadow: rgba(0, 0, 0, 0.25) 0px 25px 50px -12px;
	}
`;
