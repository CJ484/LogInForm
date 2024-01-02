'use client';
import React, {useState, useEffect} from 'react';
import Link from 'next/link';
import DisplayUsers from '../../api/DisplayUsers';
import BackButton from '../../assets/symbols/arrow_left';
import styles from '../../Styles/page.module.scss';

type UserTypes = {
	firstName: string;
	lastName: string;
};
const DisplayDataPage = () => {
	const [users, setUsers] = useState([] as UserTypes[]);

	useEffect(() => {
		const fetchData = async () => {
			await DisplayUsers();
			setUsers(users);
		};

		fetchData()
			.then(data => {
				setUsers(data as unknown as UserTypes[]);
			})
			.catch(err => {
				console.log(err as Error);
			});
	}, []);

	return (
		<div className={styles.displayDatapage}>
			<Link href='/' className={styles.backButton2}>
				<BackButton />
				<p>Go Back</p>
			</Link>
			<h1>Users who have visited</h1>
			<h2>Thank You for seeing my work</h2>
			{users.map((user: UserTypes) => (
				<div className={styles.users} key={user.firstName + user.lastName}>
					<h3>
						{user.firstName} {user.lastName}
					</h3>
				</div>
			))}
		</div>
	);
};

export default DisplayDataPage;
