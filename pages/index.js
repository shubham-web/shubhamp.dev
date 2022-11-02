import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import svgs from "./../components/svgs";
export default function Home() {
	return (
		<Layout home>
			<Head>
				<title>{siteTitle}</title>
			</Head>
			<section>
				<p className={utilStyles.headingMd} style={{ textAlign: "justify" }}>
					Hey 👋, I'm Shubham. A professional web developer for last 4 years. Currently working as Full-Stack Engineer at SourceFuse Inc.
				</p>
				<div>
					<h2 className={utilStyles.headingMd}>Area of Expertise</h2>
					<ul className={utilStyles.list}>
						<li className={utilStyles.listItem}>Vanilla JavaScript ❤</li>
						<li className={utilStyles.listItem}>
							<a target="_blank" rel="noopener" href="https://www.mongodb.com/mern-stack">
								MERN Stack
							</a>
						</li>
						<li className={utilStyles.listItem}>NextJS</li>
						<li className={utilStyles.listItem}>DevOps</li>
					</ul>
				</div>
			</section>
			<p>Currently, I'm not open for any full time work but feel free to reach me out for any help or just to say "Hi".</p>
			<div className={utilStyles.footerBtnGroup}>
				<a
					className="nostyle"
					target="_blank"
					href={`https://wa.me/+918319505750?text=${encodeURIComponent("Hi Shubham!")}`}
					className={utilStyles.footerButton}
					style={{ background: "rgb(37, 211, 102)", color: "white", borderColor: "rgb(37, 211, 102)" }}
				>
					{svgs.whatsAppIcon}
				</a>
				<a
					className="nostyle"
					target="_blank"
					href="skype:live:.cid.35702db707b292e9?chat"
					className={utilStyles.footerButton}
					style={{ background: "#00aff0", color: "white", borderColor: "#00aff0" }}
				>
					{svgs.skypeIcon}
				</a>
				<a className="nostyle" target="_blank" href="https://buymeacoffee.com/shubhamp" className={utilStyles.footerButton} style={{ background: "#fd0", color: "white", borderColor: "#fd0" }}>
					{svgs.coffeeIcon}
				</a>
			</div>
			<div style={{ marginTop: "20px" }}></div>
			<a className="twitter-timeline" href="https://twitter.com/shubhamp_web?ref_src=twsrc%5Etfw">
				Tweets by shubhamp_web
			</a>
			<script async src="https://platform.twitter.com/widgets.js" charSet="utf-8"></script>
		</Layout>
	);
}
