// Import your components here
// import Button from './components/Button';
// import TaskManager from './components/TaskManager';

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Layout />,
		children: [{ path: "", element: <Home /> }],
	},
]);

function App() {
	return <RouterProvider router={router} />;
}

export default App;
