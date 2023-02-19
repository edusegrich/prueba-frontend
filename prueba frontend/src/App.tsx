import React from 'react';
import './App.css';
import Main from './pages/Main';
import User from './pages/User/User';
import {
	createBrowserRouter,
	RouterProvider,
} from 'react-router-dom';

const router = createBrowserRouter([
	{
		path: '/',
		element: <Main />,
	},
	{
		path: '/user',
		element: <User />
	}
]);

function App() {
	return (
		<RouterProvider router={router} />
	);
}

export default App;
