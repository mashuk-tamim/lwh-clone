"use client";
import React, { useEffect, useState } from "react";
import { Label } from "@/components/ui/label";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { getUser, login } from "@/api/requests";
import { loginSchema } from "@/validation/login.schema";
import { useAuth } from "@/context/auth-context";
import { useRouter } from "next/navigation";

export default function Page() {
  const { setUser } = useAuth();
  const { push } = useRouter();
	const form = useForm<z.infer<typeof loginSchema>>({
		resolver: zodResolver(loginSchema),
  });
  
  useEffect(() => {
		const fetchUser = async () => {
			const accessToken = localStorage.getItem("accessToken");
			if (accessToken) {
				try {
					const response = await getUser(accessToken);
					setUser(response.data);
				} catch (error) {
					console.error("Error fetching user data", error);
				}
			}
		};

		fetchUser();
	}, [setUser]);

	// 2. Define a submit handler.
	const onSubmit = async (values: z.infer<typeof loginSchema>) => {
		const response = await login(values);
		console.log(response);
		if (response?.token) {
			localStorage.setItem("accessToken", response?.token);

			const token = response?.token;
			const user = await getUser(token);
      console.log(user.data);
      setUser(user);
      push("/");
		}
	};

	return (
		<div className="h-screen w-screen pt-20">
			<Card className="w-[50%] mx-auto p-5">
				<Form {...form}>
					<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
						<FormField
							control={form.control}
							name="username"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Username</FormLabel>
									<FormControl>
										<Input placeholder="username" type="text" {...field} />
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name="password"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Password</FormLabel>
									<FormControl>
										<Input placeholder="password" type="password" {...field} />
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<Button type="submit" className="w-full">
							Submit
						</Button>
					</form>
				</Form>
			</Card>
		</div>
	);
}
