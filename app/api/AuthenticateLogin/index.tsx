import axios from 'axios';
import dotenv from 'dotenv';

type AuthenticateLoginTypes = {
	email: string;
	password: string;
};

const AuthenticateLogin = async ({
	email,
	password,
}: AuthenticateLoginTypes) => {
	dotenv.config();
	const apiUrlAuth = process.env.NEXT_PUBLIC_API_URL_AUTH;
	console.log(apiUrlAuth);

	return axios
		.post(apiUrlAuth!, {
			email,
			password,

			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
		} as any)
		.then(response => {
			sessionStorage.setItem('sessionToken', response.data.results as string);
			return response;
		})
		.catch(error => {
			console.log(error);
			throw new Error('Log in failed');
		});
};

export default AuthenticateLogin;
