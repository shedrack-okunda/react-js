import "./App.css";

// Import your components here
// import Button from './components/Button';
// import Navbar from './components/Navbar';
// import Footer from './components/Footer';
// import TaskManager from './components/TaskManager';

function App() {
	return (
		<div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
			{/* Navbar component will go here */}
			<header className="bg-white dark:bg-gray-800 shadow">
				<div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
					<h1 className="text-3xl font-bold">PLP Task Manager</h1>
				</div>
			</header>

			<main className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
				{/* API data display will go here */}
				<div className="mt-8 bg-white dark:bg-gray-800 overflow-hidden shadow rounded-lg p-6">
					<h2 className="text-2xl font-bold mb-4">API Data</h2>
					<p className="text-gray-500 dark:text-gray-400">
						Fetch and display data from an API here
					</p>
				</div>
			</main>
		</div>
	);
}

export default App;
