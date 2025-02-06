import { Navigate, RouteObject } from "react-router-dom";
import RootLayout from "@/components/RootLayout";
import Dashboard from "@/views/root/dashboard";

const routes: RouteObject[] = [
  {
    path: "/", // Base path for auth routes
    element: <RootLayout />, // Wrap auth routes with AuthLayout
    children: [
      {
        path: "dashboard", // Nested route for sign-in
        element: <Dashboard />,
      },
    ],
  },

  {
    path: "*",
    element: <Navigate to="/dashboard" replace />,
  },
];

export default routes;
