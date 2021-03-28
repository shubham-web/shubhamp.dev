import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";

export default function Home() {
	return (
		<Layout home>
			<Head>
				<title>{siteTitle}</title>
			</Head>
			<section className={utilStyles.headingMd}>
				<p>Hello, I'm Shubham. A Javascript Developer Having Two and a half year of Experience in Building Powerful Web Apps 🔥.</p>
				<div>
					<h2 className={utilStyles.headingMd}>Area of Expertise</h2>
					<ul>
						<li>ReactJS</li>
						<li>NodeJS</li>
						<li>AWS Services</li>
						<li>PHP</li>
					</ul>
				</div>
			</section>
			<p>
				You Can Contact Me on{" "}
				<a target="_blank" rel="noopener" href="https://twitter.com/shubhamp_web">
					Twitter
				</a>{" "}
				or check out{" "}
				<a target="_blank" href="./static/resume.pdf">
					My Resume
				</a>
				.
			</p>
		</Layout>
	);
}
