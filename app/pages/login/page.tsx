import React from 'react';
import {UserLogIn} from '@/app/Component';
import styles from '@/app/Styles/page.module.scss';

const login = () => (
	<div className={styles.page}>
		<UserLogIn />
	</div>
);

export default login;
