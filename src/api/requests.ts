import axios from "axios";
import {LOGIN_API, ME_API} from "@/api/endpoints"
import { LoginProps } from "@/types/api";
const baseURL = process.env.NEXT_PUBLIC_BASE_URL;


const axiosInstance = axios.create({
	baseURL: baseURL,
	headers: {
		"Content-Type": "application/json",
	},
});

export const login = async ({ username, password }: LoginProps) => {
	try {
		const response = await axiosInstance.post(
			LOGIN_API,
			{
				username,
				password,
			},
		);

		const data = response.data;
		
		return data;
	} catch (error) {
		console.error("Error during login", error);
		return error;
	}
};

export const getUser = async (token: string) => {
	return axiosInstance.get(ME_API, {
		headers: {
			Authorization: `Bearer ${token}`,
    },
	});
};
