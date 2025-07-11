/** @type {import('tailwindcss').Config} */
export default {
	darkMode: "class", // ✅ This is the important part
	content: [
		"./index.html",
		"./src/**/*.{js,jsx,ts,tsx}", // ✅ Add all src folders
	],
	theme: {
		extend: {},
	},
	plugins: [],
};
