import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Home from './screens/Home';
import Authentication, { AuthenticationMode } from './screens/Authentication.js';
import ErrorPage from './screens/ErrorPage.js';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ProtectedRoute from './components/ProtectedRoute.js';
import UserProvider from './context/UserProvider.js';

const router = createBrowserRouter([
  {
    errorElement: <ErrorPage />,
  },
  {
    path: '/signin',
    element: <Authentication authenticationMode={AuthenticationMode.Login} />,
  },
  {
    path: '/signup',
    element: <Authentication authenticationMode={AuthenticationMode.Register} />,
  },
  {
    element: <ProtectedRoute />,
    children: [
      {
        path: '/',
        element: <Home />,
      }
    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <UserProvider>
      <RouterProvider router={router} />
    </UserProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();