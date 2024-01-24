import axios from 'axios';
import dotenv from 'dotenv';
const DeleteAccount = async (logInToken: string) => {
	dotenv.config();
	const apiUrlDelete = process.env.NEXT_PUBLIC_API_URL_DELETE;
	return axios.put(apiUrlDelete!, {
		id: logInToken,
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json',
		},
	});
};

export default DeleteAccount;
