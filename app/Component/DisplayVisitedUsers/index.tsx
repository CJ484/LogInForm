'use client';
import React, {useState, useEffect} from 'react';
import DisplayUsers from '../../api/DisplayUsers';
import styles from '../../Styles/page.module.scss';

type UserTypes = {
	firstName: string;
	lastName: string;
};

const DisplayVisitedUsers = () => {
	const [users, setUsers] = useState<UserTypes[]>([]);

	useEffect(() => {
		const fetchData = () => {
			DisplayUsers()
				.then(response => {
					setUsers(response.data.results as UserTypes[]);
				})
				.catch(error => {
					console.log(error.response.data);
				});
		};

		fetchData();
	}, []);

	return (
		<>
			{users.map((user: UserTypes) => (
				<div className={styles.users} key={user.firstName + user.lastName}>
					<h3>
						{user.firstName} {user.lastName}
					</h3>
				</div>
			))}
		</>
	);
};

export default DisplayVisitedUsers;
