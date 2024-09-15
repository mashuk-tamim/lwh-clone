"use client";
import { useRouter } from "next/navigation";
import {
	createContext,
	ReactNode,
	useContext,
	useEffect,
	useState,
} from "react";

interface AuthContextType {
	user: any; // Replace `any` with your user type
	setUser: React.Dispatch<React.SetStateAction<any>>;
	logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({
	children,
}) => {
	const [user, setUser] = useState(null);
	const { push } = useRouter();

	useEffect(() => {
		const fetchUser = async () => {
			const user = localStorage.getItem("user");
			if (user) {
				setUser(JSON.parse(user));
			}
		};
		fetchUser();
	}, [setUser]);
	const logout = () => {
		localStorage.removeItem("user");
		setUser(null);
		push("/login");
	};

	return (
		<AuthContext.Provider value={{ user, setUser, logout }}>
			{children}
		</AuthContext.Provider>
	);
};

// Custom hook for accessing the AuthContext
export const useAuth = () => {
	const context = useContext(AuthContext);
	if (!context) {
		throw new Error("useAuth must be used within an AuthProvider");
	}
	return context;
};
