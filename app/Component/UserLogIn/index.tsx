'use client';
import Link from 'next/link';
import toast, {Toaster} from 'react-hot-toast';
import React, {type FormEvent, useEffect, useState} from 'react';
import {Button} from '@mui/joy';
import {Visibility, VisibilityOff} from '@mui/icons-material';
import {
	FormControl,
	InputLabel,
	IconButton,
	InputAdornment,
	FilledInput,
} from '@mui/material';
import {useRouter} from 'next/navigation';
import AuthenticateLogin from '../../api/AuthenticateLogin';
import BackButton from '@/app/assets/symbols/arrow_left';
import styles from '../../Styles/page.module.scss';

const UserLogIn = () => {
	const [showPassword, setShowPassword] = useState(false);
	const [emailInput, setEmailInput] = useState('');
	const [passwordInput, setPasswordInput] = useState('');
	const [logInStatus, setLogInStatus] = useState(false);
	const {push} = useRouter();

	const resetForm = () => {
		setEmailInput('');
		setPasswordInput('');
	};

	const submission = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		toast
			.promise(
				AuthenticateLogin({email: emailInput, password: passwordInput}),
				{
					loading: 'Logging In',
					success: 'Log In Successful',
					error: (err: Error) => `${err.toString()}`,
				},
			)
			.then(() => {
				resetForm();
				setLogInStatus(true);
			})
			.catch(error => error as Error);
	};

	const handleClickShowPassword = () => {
		setShowPassword(!showPassword);
	};

	const handleMouseDownPassword = (
		event: React.MouseEvent<HTMLButtonElement>,
	) => {
		event.preventDefault();
	};

	useEffect(() => {
		if (logInStatus) {
			push('/pages/Home');
		}
	}, [logInStatus]);

	return (
		<>
			<form onSubmit={submission} className={styles.form}>
				<Link className={styles.backButton} href='/'>
					<BackButton /> Go back
				</Link>
				<h2>Log In</h2>
				<a className={styles.links} href='../pages/register'>
					<h3>or Create an Account</h3>
				</a>
				<FormControl sx={{m: 1, width: '25ch'}} variant='filled'>
					<InputLabel className={styles.form_input} htmlFor='filled-adornment-email'>Email</InputLabel>
					<FilledInput
						className={styles.form_input}
						required
						id='filled-adornment-email'
						value={emailInput}
						onChange={e => {
							setEmailInput(e.target.value);
						}}
					/>
				</FormControl>
				<FormControl sx={{m: 1, width: '25ch'}} variant='filled'>
					<InputLabel className={styles.form_input} htmlFor='filled-adornment-password'>Password</InputLabel>
					<FilledInput
						required
						className={styles.form_input}
						id='filled-adornment-password'
						type={showPassword ? 'text' : 'password'}
						value={passwordInput}
						onChange={e => {
							setPasswordInput(e.target.value);
						}}
						endAdornment={
							<InputAdornment position='end'>
								<IconButton
									aria-label='toggle password visibility'
									onClick={handleClickShowPassword}
									onMouseDown={handleMouseDownPassword}
									edge='end'
								>
									{showPassword ? <VisibilityOff /> : <Visibility />}
								</IconButton>
							</InputAdornment>
						}
					/>
				</FormControl>
				<Button className={styles.form_button} type='submit'>
          Log In
				</Button>
			</form>
			<Toaster />
		</>
	);
};

export default UserLogIn;
