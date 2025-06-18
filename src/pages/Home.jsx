import React from "react";
import Card from "../components/Card";
import TaskManager from "../components/TaskManager";
import ApiPosts from "../api/ApiPosts";

const Home = () => (
	<>
		<Card>
			<TaskManager />
		</Card>

		<Card>
			<ApiPosts />
		</Card>
	</>
);
export default Home;
