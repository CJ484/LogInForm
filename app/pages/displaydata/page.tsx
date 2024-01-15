'use client';
import React, {useState, useEffect} from 'react';
import {DisplayVisitedUsers} from '@/app/Component';
import Link from 'next/link';
import DisplayUsers from '../../api/DisplayUsers';
import BackButton from '../../assets/symbols/arrow_left';
import styles from '../../Styles/page.module.scss';

const DisplayDataPage = () => (
	<div className={styles.displayDatapage}>
		<Link href='/' className={styles.backButton2}>
			<BackButton />
			<p>Go Back</p>
		</Link>
		<h1>Users who have visited</h1>
		<h2>Thank You for seeing my work</h2>
		<DisplayVisitedUsers />
	</div>
);

export default DisplayDataPage;
