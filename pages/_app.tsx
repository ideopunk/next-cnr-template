import "../public/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { withPasswordProtect } from "@storyofams/next-password-protect";

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<>
			<Head>
				<meta name="viewport" content="viewport-fit=cover" />
			</Head>
			<Component {...pageProps} />
		</>
	);
}
export default process.env.PASSWORD_PROTECT ? withPasswordProtect(MyApp) : MyApp;
