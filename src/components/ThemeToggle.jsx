import { Sun } from "lucide-react";
import { Moon } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

const ThemeToggle = () => {
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

export default ThemeToggle;
