import { useEffect } from "react";
import { useState } from "react";

const useLocalStorage = (key, initialValue) => {
	const [storedValue, setStoredValue] = useState(() => {
		const saved = localStorage.getItem(key);
		return saved ? JSON.parse(saved) : initialValue;
	});

	useEffect(() => {
		localStorage.setItem(key, JSON.stringify(storedValue));
	}, [key, storedValue]);

	return [storedValue, setStoredValue];
};

export default useLocalStorage;
