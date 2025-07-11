import { useEffect } from "react";
import { useState } from "react";

const useLocalStorage = () => {
	const [tasks, setTasks] = useState(() => {
		const saved = localStorage.getItem("tasks");
		return saved ? JSON.parse(saved) : [];
	});

	useEffect(() => {
		localStorage.setItem("tasks", JSON.stringify(tasks));
	}, [tasks]);

	return [tasks, setTasks];
};

export default useLocalStorage;
 