import React, { useState, useEffect } from "react";
import Button from "../components/Button";
import Card from "../components/Card";

const ApiPosts = () => {
	const [posts, setPosts] = useState([]);
	const [filteredPosts, setFilteredPosts] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);
	const [search, setSearch] = useState("");
	const [page, setPage] = useState(1);
	const POSTS_PER_PAGE = 10;

	useEffect(() => {
		const fetchPosts = async () => {
			try {
				setLoading(true);
				const res = await fetch(
					"https://jsonplaceholder.typicode.com/posts"
				);
				if (!res.ok) throw new Error("Failed to fetch posts");
				const data = await res.json();
				setPosts(data);
				setFilteredPosts(data);
				setLoading(false);
			} catch (err) {
				setError(err.message);
				setLoading(false);
			}
		};

		fetchPosts();
	}, []);

	// Handle search
	useEffect(() => {
		const results = posts.filter((post) =>
			post.title.toLowerCase().includes(search.toLowerCase())
		);
		setFilteredPosts(results);
		setPage(1); // reset to first page
	}, [search, posts]);

	// Pagination logic
	const startIndex = (page - 1) * POSTS_PER_PAGE;
	const currentPagePosts = filteredPosts.slice(
		startIndex,
		startIndex + POSTS_PER_PAGE
	);
	const totalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE);

	if (loading) return <p className="text-center">Loading posts...</p>;
	if (error) return <p className="text-red-500 text-center">{error}</p>;

	return (
		<div className="p-6 bg-white dark:bg-gray-900 rounded-lg shadow">
			<h2 className="text-2xl font-bold mb-4">API Posts</h2>

			{/* Search Input */}
			<input
				type="text"
				value={search}
				onChange={(e) => setSearch(e.target.value)}
				placeholder="Search posts by title..."
				className="w-full mb-6 px-4 py-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600"
			/>

			{/* Posts Grid */}
			<div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
				{currentPagePosts.map((post) => (
					<Card key={post.id} title={post.title}>
						<p>{post.body}</p>
					</Card>
				))}
			</div>

			{/* Pagination Controls */}
			<div className="flex justify-center items-center gap-2 mt-6">
				<Button
					variant="secondary"
					size="sm"
					disabled={page === 1}
					onClick={() => setPage(page - 1)}>
					Prev
				</Button>
				<span className="text-gray-600 dark:text-gray-300">
					Page {page} of {totalPages}
				</span>
				<Button
					variant="secondary"
					size="sm"
					disabled={page === totalPages}
					onClick={() => setPage(page + 1)}>
					Next
				</Button>
			</div>
		</div>
	);
};

export default ApiPosts;
