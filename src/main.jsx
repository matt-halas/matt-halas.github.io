import React from 'react'
import ReactDOM from 'react-dom/client'
import Layout from './Layout'
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Project from "./pages/Project";
import FluidSim from "./pages/FluidSim";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from './pages/Contact';
import Resume from './pages/Resume';

import './index.css'

const router = createBrowserRouter([
  {
    path: "",
    element: <Layout />,
    errorElement: <div>404</div>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "projects/fluidSim",
        element: <FluidSim />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "resume",
        element: <Resume />,
      },
      {
        path: "projects/:projectTitle",
        element: <Project />,
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
