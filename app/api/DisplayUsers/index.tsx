import React from 'react';
import axios from 'axios';

type User = {
	firstName: string;
	lastName: string;
};

const DisplayUsers = async () => {
	const apiUrlDisplay = process.env.NEXT_PUBLIC_API_URL_DISPLAY;

	return axios
		.get(apiUrlDisplay!, {
			headers: {
				'Content-Type': 'application/json',
			},
		});
};

export default DisplayUsers;
