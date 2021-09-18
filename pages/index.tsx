import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function Home() {
	const [svgWidth, setSvgWidth] = useState(0);
	const [svgHeight, setSvgHeight] = useState(0);

	const targetRef = useRef<HTMLDivElement>(null);
	useEffect(() => {
		if (targetRef.current) {
			console.log(targetRef.current.offsetHeight);
			setSvgWidth(targetRef.current.offsetWidth - 50);
			setSvgHeight(targetRef.current.offsetHeight - 50);
		}
	}, []);

	return (
		<div
			className="w-screen h-screen bg-gradient-to-t from-red-300 to-pink-200 flex justify-center items-center"
			ref={targetRef}
		>
			<Head>
				<title>CNR App</title>
				<meta name="description" content="Generated by create next app" />
				<meta property="og:title" content="CNR" />
				<meta property="og:description" content="Generated by create next app" />

				{/* <meta property="og:url" content="???" /> */}
				{/* <link rel="canonical" href="???" /> */}

				<link rel="icon" href="/favicon.ico" />
			</Head>

			<div className="absolute w-screen h-screen flex justify-center items-center">
				<svg width={svgWidth + 20} height={svgHeight + 20}>
					<path
						d={`M 10 10 L ${svgWidth - 10} 10 `}
						stroke="black"
						strokeWidth={2}
						fill="none"
						className="path"
						clipPath="url(#hide-top)"
					/>

					<path
						d={`m ${svgWidth - 10} 10 L ${svgWidth - 10} ${svgHeight - 10}`}
						stroke="black"
						strokeWidth={2}
						fill="none"
						className="path"
						clipPath="url(#hide-top)"
					/>

					<path
						d={`M ${svgWidth - 10} ${svgHeight - 10} L 10 ${svgHeight - 10}  `}
						stroke="black"
						strokeWidth={2}
						fill="none"
						className="path"
						clipPath="url(#hide-top)"
					/>

					<path
						d={`m 10 ${svgHeight - 10} L 10 10`}
						stroke="black"
						strokeWidth={2}
						fill="none"
						className="path"
						clipPath="url(#hide-top)"
					/>
				</svg>
			</div>
			<main>
				<h1>
					Welcome to <a href="https://nextjs.org">Next.js</a>, using{" "}
					<a href="???">CNR!</a>
				</h1>

				<p>
					Get started by editing <code>pages/index.js</code>
				</p>
				<p>Add content to the og:url and canonical link tags.</p>
			</main>
		</div>
	);
}
