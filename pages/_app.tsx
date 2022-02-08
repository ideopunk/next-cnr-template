import "../public/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { withPasswordProtect } from "@storyofams/next-password-protect";
import { DefaultSeo } from "next-seo";

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<>
			<DefaultSeo
				openGraph={{
					type: "website",
					locale: "en_US",
					url: "https://www.url.com/",
					site_name: "SiteName",
					images: [
						{
							url: "https://upload.wikimedia.org/wikipedia/commons/e/e6/Tom_Thomson_-_The_Jack_Pine_1916.jpg",
							alt: "Image description",
							width: 2604,
							height: 2380,
						},
					],
				}}
				twitter={{
					handle: "@handle",
					site: "@site",
					cardType: "summary_large_image",
				}}
			/>

			<Component {...pageProps} />
		</>
	);
}
export default process.env.NODE_ENV !== "production" ? withPasswordProtect(MyApp) : MyApp;
