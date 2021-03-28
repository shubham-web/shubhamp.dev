import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";

export default function Home() {
	return (
		<Layout home>
			<Head>
				<title>{siteTitle}</title>
			</Head>
			<section>
				<p className={utilStyles.headingMd}>Hello, I'm Shubham. A Javascript Developer Having Two and a half year of Experience in Building Powerful Web Apps 🔥.</p>
				<div>
					<h2 className={utilStyles.headingMd}>Area of Expertise</h2>
					<ul className={utilStyles.list}>
						<li className={utilStyles.listItem}>ReactJS</li>
						<li className={utilStyles.listItem}>NodeJS</li>
						<li className={utilStyles.listItem}>AWS Services</li>
						<li className={utilStyles.listItem}>PHP</li>
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
