import React from 'react';
import ReactDOM from 'react-dom/client';
import {
	createBrowserRouter,
	RouterProvider,
} from "react-router-dom";
import Landingpage from './Components/Landingpage';
import LoginPage from './Components/LoginPage';
import SignupPage from './Components/SignupPage';
import Navigationbar from './Components/Navigationbar';
import LibraryOfTools from './Components/PinLibraryOfTools';

const router = createBrowserRouter([
	{
		path: "/",
		element: <Landingpage />,
		children: [
			{
			path: "/",
			element: <Navigationbar />,
			},
		],
	},
	{
		path: "/login",
		element: <LoginPage />,
	},
	{
		path: "/signup",
		element: <SignupPage />,
	},
	{
		path: "/tools",
		element: <LibraryOfTools />,
	},
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);