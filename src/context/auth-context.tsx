"use client"
import React, {
	createContext,
	useState,
	useContext,
	useEffect,
	ReactNode,
} from "react";
import { getUser } from "@/api/requests";
import { useRouter } from "next/navigation";

interface AuthContextType {
	user: any;
	setUser: React.Dispatch<React.SetStateAction<any>>;
	logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({
	children,
}) => {
  const [user, setUser] = useState<any>(null);
  const { push } = useRouter();

  useEffect(() => {
		const fetchUser = async () => {
			const accessToken = localStorage.getItem("accessToken");
			if (accessToken) {
				try {
					const response = await getUser(accessToken);
					setUser(response.data);
				} catch (error) {
          console.error("Error fetching user data", error);
          localStorage.removeItem("accessToken");
          setUser(null);
				}
			}
		};

		fetchUser();
  }, []);
  
  const logout = () => {
		localStorage.removeItem("accessToken");
		localStorage.removeItem("refreshToken");
		setUser(null);
    push("/login");
	};

	return (
		<AuthContext.Provider
			value={{ user, setUser, logout}}
		>
			{children}
		</AuthContext.Provider>
	);
};

export const useAuth = () => {
	const context = useContext(AuthContext);
	if (context === undefined) {
		throw new Error("useAuth must be used within an AuthProvider");
	}
	return context;
};
