import axios from 'axios';

const UpdateInfo = async (idToken: string, passwordInput: string) => {
	const apiUrlUpdate = process.env.NEXT_PUBLIC_API_URL_UPDATE;

	return axios
		.post(apiUrlUpdate!, {
			id: idToken,
			newPassword: passwordInput,
			headers: {
				'Content-Type': 'application/json',
			},
		})
		.then(response => response.data.results as JSON)
		.catch(error => error as JSON);
};

export default UpdateInfo;
