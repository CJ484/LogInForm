'use client';
import React, {useState, useEffect} from 'react';
import {Button, Input} from '@mui/joy';
import {useRouter} from 'next/navigation';
import toast, {Toaster} from 'react-hot-toast';
import {LocateUser, UpdateInfo} from '../../api';
import styles from '../../Styles/page.module.scss';

type AccountInfoTypes = {
	firstName: string;
	lastName: string;
};

const Home = () => {
	const [accountInfo, setAccountInfo] = useState({} as AccountInfoTypes);
	const [logInToken, setLogInToken] = useState('' as string);
	const [newPasswordInput, setNewPasswordInput] = useState('');
	const {push} = useRouter();

	const updatePassword = () => {
		const idToken: string = sessionStorage.getItem('sessionToken')!;
		// eslint-disable-next-line @typescript-eslint/no-floating-promises
		toast.promise(UpdateInfo(idToken, newPasswordInput), {
			loading: 'Updating Password...',
			success: 'Password Updated',
			error: (err: Error) => `${err.toString()}`,
		});
		setNewPasswordInput('');
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
			LocateUser(idToken).then(data => {
				setAccountInfo(data as unknown as AccountInfoTypes);
			}).catch((error: Error) => {
				console.log(error);
			});
		}
	}, [logInToken]);

	return (
		<div>
			<h1>Home Page</h1>
			<h2>Welcome back!</h2>
			<h2>
				{accountInfo.firstName} {accountInfo.lastName}
			</h2>
			<h2>Your Current Password is hashed </h2>
			<div>
				<Input
					required
					className={styles.form_input}
					placeholder='New Password'
					value={newPasswordInput}
					onChange={e => {
						setNewPasswordInput(e.target.value);
					}}
				/>
				<Button sx={{margin: '1rem'}} onClick={() => {
					updatePassword();
				}}>
          Update Password
				</Button>
			</div>
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
