import { Moon } from "lucide-react";
import { Sun } from "lucide-react";
import { useState } from "react";
import { createContext } from "react";
import { useContext } from "react";
import { useEffect } from "react";

const ThemeContext = createContext(null);
const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }) => {
	const [theme, setTheme] = useState(
		() => localStorage.getItem("theme") || "light"
	);

	useEffect(() => {
		document.documentElement.classList.toggle("dark", theme === "dark");
		localStorage.setItem("theme", theme);
	}, [theme]);

	const toggleTheme = () =>
		setTheme((prev) => (prev === "dark" ? "light" : "dark"));

	return (
		<ThemeContext.Provider value={{ theme, toggleTheme }}>
			{children}
		</ThemeContext.Provider>
	);
};

export const ThemeToggle = () => {
	const { theme, toggleTheme } = useTheme();

	return (
		<button
			onClick={toggleTheme}
			className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:ring-2"
			aria-label="Toggle theme">
			{theme === "dark" ? (
				<Sun className="text-yellow-400" />
			) : (
				<Moon className="text-blue-600" />
			)}
		</button>
	);
};
