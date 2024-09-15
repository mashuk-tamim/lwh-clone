import { z } from "zod";

export const loginSchema = z.object({
	username: z
		.string()
		.min(3, {
			message: "Username must be at least 3 characters.",
		})
		.max(30, {
			message: "Username cannot exceed 30 characters.",
		}),
	password: z
		.string()
		.min(8, {
			message: "Password must be at least 8 characters.",
		})
		.max(40, {
			message: "Password cannot exceed 40 characters.",
		}),
});
