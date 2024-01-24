'use client';
import React, {useState, useEffect} from 'react';
import {Button, Input} from '@mui/joy';
import {isEqual} from 'lodash';
import {useRouter} from 'next/navigation';
import toast, {Toaster} from 'react-hot-toast';
import {LocateUser, UpdateInfo, DeleteAccount} from '../../api';
import styles from '../../Styles/page.module.scss';

type AccountInfoTypes = {
	firstName: string;
	lastName: string;
};

const Home = () => {
	const [accountInfo, setAccountInfo] = useState({} as AccountInfoTypes);
	const [logInToken, setLogInToken] = useState('' as string);
	const [newPasswordInput, setNewPasswordInput] = useState('');
	const [newPasswordConfirmInput, setNewPasswordConfirmInput] = useState('');
	const {push} = useRouter();

	const updatePassword = async () => {
		const idToken: string = sessionStorage.getItem('sessionToken')!;

		if (isEqual(newPasswordInput, newPasswordConfirmInput)) {
			await toast.promise(UpdateInfo(idToken, newPasswordInput), {
				loading: 'Updating Password...',
				success: 'Password Updated',
				error: (err: Error) => `${err.toString()}`,
			});
			setNewPasswordInput('');
		} else {
			toast.error('Passwords do not match');
		}
	};

	const DeleteCurrentProfile = async () => {
		const idToken: string = sessionStorage.getItem('sessionToken')!;
		await toast.promise(DeleteAccount(idToken), {
			loading: 'Deleting Account...',
			success: 'Account Deleted',
			error: (err: Error) => `${err.toString()}`,
		});
		logOut();
	};

	const logOut = () => {
		sessionStorage.removeItem('sessionToken');
		push('/');
	};

	useEffect(() => {
		setTimeout(() => {
			const idToken: string = sessionStorage.getItem('sessionToken')!;
			if (idToken) {
				setLogInToken(idToken);
			}
		}, 3000);
	}, []);

	useEffect(() => {
		const idToken: string = sessionStorage.getItem('sessionToken')!;
		if (idToken) {
			LocateUser(idToken)
				.then(data => {
					setAccountInfo(data as unknown as AccountInfoTypes);
				})
				.catch((error: Error) => {
					console.log(error);
				});
		}
	}, [logInToken]);

	return (
		<div className={styles.homePage}>
			<h1>Home Page</h1>
			<h2>Welcome back!</h2>
			<h2>
				{accountInfo.firstName} {accountInfo.lastName}
			</h2>
			<h2>Your Current Password is hashed </h2>
			<div>
				<Input
					required
					sx={{margin: '1rem'}}
					placeholder='New Password'
					value={newPasswordInput}
					onChange={e => {
						setNewPasswordInput(e.target.value);
					}}
				/>
				<Input
					required
					sx={{margin: '1rem'}}
					placeholder='Confirm New Password'
					value={newPasswordConfirmInput}
					onChange={e => {
						setNewPasswordConfirmInput(e.target.value);
					}}
				/>
				<Button
					sx={{margin: '1rem'}}
					onClick={() => {
						void updatePassword();
					}}
				>
          Update Password
				</Button>
			</div>
			<Button
				sx={{margin: '1rem'}}
				color='danger'
				onClick={async () => {
					await DeleteCurrentProfile();
				}}
			>
        Delete Account
			</Button>
			<Button
				sx={{margin: '1rem'}}
				onClick={() => {
					logOut();
				}}
			>
        Log Out
			</Button>
			<Toaster />
		</div>
	);
};

export default Home;
