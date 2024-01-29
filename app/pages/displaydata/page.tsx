/* eslint-disable arrow-body-style */
'use client';
import React from 'react';
import {DisplayVisitedUsers} from '@/app/Component';
import Link from 'next/link';
import BackButton from '../../assets/symbols/arrow_left';
import styles from '../../Styles/page.module.scss';

const DisplayDataPage = () => {
	return (
		<div className={styles.DisplayUsersPage}>
			<Link href='/' className={styles.backButton2}>
				<BackButton />
				<p>Go Back</p>
			</Link>
			<h1>Users who have visited</h1>
			<h2>Thank You for seeing my work</h2>
			<div className={styles.visitedUsers}>
				<DisplayVisitedUsers />
			</div>
		</div>
	);
};

export default DisplayDataPage;
