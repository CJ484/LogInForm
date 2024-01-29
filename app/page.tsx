'use client';
import React from 'react';
import styles from './Styles/page.module.scss';
import Link from 'next/link';
import * as dotenv from 'dotenv';
import CursorEffect from './Component/CursorEffect';

const Home = () => {
	dotenv.config();
	return (
		<main>
			<svg>
				<defs>
					<filter id='goo'>
						<feGaussianBlur
							in='SourceGraphic'
							stdDeviation='10'
							result='blur'
						/>
						<feColorMatrix
							in='blur'
							mode='matrix'
							values='
							1 0 0 0 0
							0 1 0 0 0
							0 0 1 0 0
							0 0 0 20 -10'
							result='goo'
						/>
						<feBlend in='SourceGraphic' in2='goo' />
					</filter>
				</defs>
			</svg>
			<div className={styles.graidentContainer}>
				<div className={styles.g1}></div>
				<div className={styles.g2}></div>
				<div className={styles.g3}></div>
				<div className={styles.g4}></div>
				<div className={styles.g5}></div>
				<CursorEffect />
			</div>
			<div className={styles.MainMenu}>
				<h1 className={styles.title}>Authorization App</h1>
				<div className={styles.navigation}>
					<Link className={styles.nav_button} href='/pages/login'>
						<p>Log in</p>
					</Link>{' '}
					<Link className={styles.nav_button} href='/pages/register'>
						<p>Register</p>
					</Link>{' '}
					<Link className={styles.nav_button} href='/pages/displaydata'>
						<p>Previous Users</p>
					</Link>
				</div>
			</div>
		</main>
	);
};

export default Home;
