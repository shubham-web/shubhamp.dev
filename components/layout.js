import Head from "next/head";
import Image from "next/image";
import styles from "./layout.module.css";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";

const name = "Shubham Prajapat";
export const siteTitle = "Shubham Prajapat - Web & App Developer";
export const siteDescription = "✔ A Full Stack Web Developer Specialized in JavaScript. Having More Than 2 Years of Experience in Building Powerful and Unique Web Apps.";
export default function Layout({ children, home }) {
	return (
		<div className={styles.container}>
			<Head>
				<meta charSet="UTF-8" />
				<link rel="icon" href="/favicon.ico" />
				<meta name="theme-color" content="#ffff00" />
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
				<title>{siteTitle}</title>
				<meta name="description" content={siteDescription} />
				<meta itemProp="name" content={siteTitle} />
				<meta itemProp="description" content={siteDescription} />
				<meta itemProp="image" content="https://shubhamprajapat.com/images/card.jpg" />
				<meta property="og:url" content="https://shubhamprajapat.com" />
				<meta property="og:type" content="website" />
				<meta property="og:title" content={siteTitle} />
				<meta property="og:description" content={siteDescription} />
				<meta property="og:image" content="https://shubhamprajapat.com/images/card.jpg" />
				<meta name="twitter:card" content="summary_large_image" />
				<meta name="twitter:title" content={siteTitle} />
				<meta name="twitter:description" content={siteDescription} />
				<meta name="twitter:image" content="https://shubhamprajapat.com/images/card.jpg" />
				<meta name="keywords" content="JavaScript Developer, Web developers in India, App Developer in central india, Web developer in dewas madhya pradesh, Web Developement Freelancer" />
				<meta name="author" content="Shubham Prajapat" />
				{/* <!-- Global site tag (gtag.js) - Google Analytics --> */}
				<script async src="https://www.googletagmanager.com/gtag/js?id=UA-182346080-1"></script>
				<script
					dangerouslySetInnerHTML={{
						__html: `window.dataLayer = window.dataLayer || [];
					function gtag() {
						dataLayer.push(arguments);
					}
					gtag("js", new Date());

					gtag("config", "UA-182346080-1");`,
					}}
				></script>
			</Head>
			<header className={styles.header}>
				{home ? (
					<>
						<Image priority src="/images/profile.jpg" className={utilStyles.borderCircle} height={144} width={144} alt={name} />
						<h1 className={utilStyles.heading2Xl}>{name}</h1>
					</>
				) : (
					<>
						<Link href="/">
							<a>
								<Image priority src="/images/profile.jpg" className={utilStyles.borderCircle} height={108} width={108} alt={name} />
							</a>
						</Link>
						<h2 className={utilStyles.headingLg}>
							<Link href="/">
								<a className={utilStyles.colorInherit}>{name}</a>
							</Link>
						</h2>
					</>
				)}
			</header>
			<main>{children}</main>
			{!home && (
				<div className={styles.backToHome}>
					<Link href="/">
						<a>← Back to home</a>
					</Link>
				</div>
			)}
		</div>
	);
}
