import axios from "axios";

const UpdateInfo = (idToken: String, passwordInput: String) => {
    const apiUrlUpdate = process.env.NEXT_PUBLIC_API_URL_UPDATE;

    return axios.post(apiUrlUpdate!, {
        id: idToken,
        newPassword: passwordInput,
        headers: {
            "Content-Type": "application/json",
        },
    })
    .then((response) => {
        return response.data.results;
    })
    .catch((error) => {
        return error;
    });

};

export default UpdateInfo;