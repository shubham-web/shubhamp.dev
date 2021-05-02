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
						<li className={utilStyles.listItem}>NextJS</li>
						<li className={utilStyles.listItem}>NodeJS</li>
						<li className={utilStyles.listItem}>MongoDB</li>
						<li className={utilStyles.listItem}>AWS Services</li>
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
			<a className="nostyle" target="_blank" href={`https://wa.me/+918319505750?text=${encodeURIComponent("Hi Shubham!")}`}>
				<button type="button" className={utilStyles.chatButton} style={{ background: "rgb(37, 211, 102)", color: "white", borderColor: "rgb(37, 211, 102)" }}>
					<span className={utilStyles.chatButtonIcon}>
						<svg xmlns="http://www.w3.org/2000/svg" width="99.986" height="100.464" viewBox="0 0 418 420">
							<path
								fill="#fefefe"
								fillRule="evenodd"
								d="M0.394,419.826l29.49-107.717A207.5,207.5,0,0,1,2.137,208.187C2.183,93.576,95.434.331,210.01,0.331A207.906,207.906,0,0,1,417.882,208.353c-0.046,114.614-93.306,207.868-207.869,207.868h-0.086a207.686,207.686,0,0,1-99.337-25.3Zm115.3-66.539L122,357.032a172.519,172.519,0,0,0,87.937,24.083h0.071c95.228,0,172.734-77.508,172.773-172.775a172.8,172.8,0,0,0-172.7-172.9c-95.3,0-172.808,77.5-172.846,172.761A172.357,172.357,0,0,0,63.65,300.147l4.108,6.538L50.3,370.441Zm199.041-95.5c-1.3-2.167-4.761-3.467-9.954-6.068s-30.73-15.163-35.491-16.9-8.224-2.6-11.687,2.6-13.415,16.9-16.446,20.366-6.059,3.9-11.252,1.3S207.976,251,188.137,233.3c-15.441-13.773-25.865-30.781-28.9-35.982s-0.323-8.01,2.277-10.6c2.337-2.327,5.195-6.067,7.792-9.1s3.462-5.2,5.193-8.665,0.866-6.5-.433-9.1-11.685-28.167-16.014-38.567c-4.216-10.127-8.5-8.755-11.686-8.916-3.026-.151-6.492-0.183-9.955-0.183a19.083,19.083,0,0,0-13.85,6.5c-4.761,5.2-18.179,17.767-18.179,43.331S123,212.285,125.6,215.752s36.624,55.929,88.728,78.427a298.249,298.249,0,0,0,29.61,10.941c12.442,3.954,23.765,3.4,32.715,2.058,9.979-1.49,30.73-12.564,35.058-24.7S316.035,259.948,314.736,257.783Z"
							></path>
						</svg>
					</span>
					<div>Have a Quick Chat</div>
				</button>
			</a>
		</Layout>
	);
}
