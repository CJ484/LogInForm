'use client';
import React, {type FormEvent} from 'react';
import {AddUser} from '../../api';
import {useState} from 'react';
import {first, isEqual} from 'lodash';
import {
	FormControl,
	InputLabel,
	FilledInput,
} from '@mui/material';
import {Input, Button} from '@mui/joy';
import toast, {Toaster} from 'react-hot-toast';
import BackButton from '@/app/assets/symbols/arrow_left';
import styles from '../../Styles/page.module.scss';
import Link from 'next/link';
import {useRouter} from 'next/navigation';

const CreateNewUser = () => {
	const [firstNameInput, setFirstNameInput] = useState('');
	const [lastNameInput, setLastNameInput] = useState('');
	const [emailInput, setEmailInput] = useState('');
	const [passwordCypherInput, setPasswordCypherInput] = useState('');
	const [passwordConfirmInput, setPasswordConfirmInput] = useState('');
	const {push} = useRouter();

	const isFormValid = () => {
		if (isEqual(passwordCypherInput, passwordConfirmInput)) {
			return true;
		}

		return false;
	};

	const resetForm = () => {
		setFirstNameInput('');
		setLastNameInput('');
		setEmailInput('');
		setPasswordCypherInput('');
		setPasswordConfirmInput('');
	};

	const submission = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (!isFormValid()) {
			toast.error('Passwords do not match');
			return;
		}

		toast
			.promise(
				AddUser({
					firstNameInput,
					lastNameInput,
					emailInput,
					passwordCypherInput,
				}),
				{
					loading: 'Creating User...',
					success: 'User Creation Successful',
					error: 'User Creation Failed',
				},
			)
			.then(() => {
				resetForm();
				push('/pages/login');
			})
			.catch(error => error as Error);
	};

	const inputFields = [
		{
			placeholder: 'First Name',
			value: firstNameInput,
			onChange(e: React.ChangeEvent<HTMLInputElement>) {
				setFirstNameInput(e.target.value);
			},
		},
		{
			placeholder: 'Last Name',
			value: lastNameInput,
			onChange(e: React.ChangeEvent<HTMLInputElement>) {
				setLastNameInput(e.target.value);
			},
		},
		{
			placeholder: 'Email',
			value: emailInput,
			onChange(e: React.ChangeEvent<HTMLInputElement>) {
				setEmailInput(e.target.value);
			},
		},
		{
			placeholder: 'Password',
			value: passwordCypherInput,
			onChange(e: React.ChangeEvent<HTMLInputElement>) {
				setPasswordCypherInput(e.target.value);
			},
		},
		{
			placeholder: 'Confirm Password',
			value: passwordConfirmInput,
			onChange(e: React.ChangeEvent<HTMLInputElement>) {
				setPasswordConfirmInput(e.target.value);
			},
		},
	];

	return (
		<>
			<form onSubmit={submission} className={styles.form}>
				<div className={styles.blurBackground}></div>
				<Link href='/' className={styles.backButton}>
					<BackButton />
          Go back
				</Link>
				<h2 className={styles.form_title}>Creating an Account is Easy</h2>
				<h3 className={styles.form_title}>Just fill out the form below!</h3>
				<Link href='../pages/login' className={styles.links}>
					Already have an Account? Log in Here!
				</Link>
				{inputFields.map((input, index) => (
					<FormControl key={index} sx={{m: 1, width: '25ch'}} variant='filled'>
						<InputLabel className={styles.form_input} htmlFor='filled-adornment-email'>{input.placeholder}</InputLabel>
						<FilledInput
							className={styles.form_input}
							required
							id={`filled-adornment-${input.placeholder}`}
							value={input.value}
							onChange={e => {
								if (e.target instanceof HTMLInputElement) {
									input.onChange(e as React.ChangeEvent<HTMLInputElement>);
								}
							}}
						/>
					</FormControl>))}
				<Button className={styles.form_button} type='submit'>
					Create
				</Button>
			</form>
			<Toaster />
		</>
	);
};

export default CreateNewUser;
