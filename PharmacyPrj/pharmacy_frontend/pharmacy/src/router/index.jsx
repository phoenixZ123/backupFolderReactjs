import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Layout } from "../layout";
import { Home } from "../components/Home";
import { Drugs } from "../components/Drugs";

export default function index() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/drugs",
          element: <Drugs />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router}></RouterProvider>;
}
