import useLocalStorage from "./useLocalStorage";

/**
 * Custom hook for managing tasks with localStorage persistence
 */
const useLocalStorageTasks = () => {
	// Initialize state from localStorage or with empty array
	const [tasks, setTasks] = useLocalStorage();

	// Add a new task
	const addTask = (text) => {
		if (text.trim()) {
			setTasks([
				...tasks,
				{
					id: Date.now(),
					text,
					completed: false,
					createdAt: new Date().toISOString(),
				},
			]);
		}
	};

	// Toggle task completion status
	const toggleTask = (id) => {
		setTasks(
			tasks.map((task) =>
				task.id === id ? { ...task, completed: !task.completed } : task
			)
		);
	};

	// Delete a task
	const deleteTask = (id) => {
		setTasks(tasks.filter((task) => task.id !== id));
	};

	return { tasks, addTask, toggleTask, deleteTask };
};

export default useLocalStorageTasks;
