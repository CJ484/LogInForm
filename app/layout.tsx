import React from 'react';
import type {Metadata} from 'next';
import styles from './Styles/page.module.scss';
import './Styles/globals.scss';
export const metadata: Metadata = {
	title: 'Authorization App',
	description: 'A simple login form to demonstrate Next.js usage',
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='en'>
			<head>
				<meta charSet='utf-8' />
				<meta
					name='description'
					content='A simple Login form to demonstrate my use of Next.js, Express.js, Node.js'
				/>
				<meta name='viewport' content='width=device-width, initial-scale=1' />
				<link rel='icon' type='image/x-icon' href='./assets/symbols/key.svg' />
				<title>Authorization App</title>
			</head>
			<body className={styles.gradientBg}>
				{children}
			</body>
		</html>
	);
}
