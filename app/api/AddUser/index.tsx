import axios from 'axios';

type User = {
	firstNameInput: string;
	lastNameInput: string;
	emailInput: string;
	passwordCypherInput: string;
};

const AddUser = async ({
	firstNameInput,
	lastNameInput,
	emailInput,
	passwordCypherInput,
}: User) => {
	const apiUrlAdd = process.env.NEXT_PUBLIC_API_URL_ADD;
	console.log(apiUrlAdd);

	await axios.post(apiUrlAdd!, {
		firstNameInput,
		lastNameInput,
		emailInput,
		passwordCypherInput,
	} as any, {
		headers: {
			'Content-Type': 'application/json',
		},
	})
		.then(response => response.data.results as string)
		.catch(error => {
			console.error(error);
			return error as Error;
		});
};

export default AddUser;
