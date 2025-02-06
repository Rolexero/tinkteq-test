import { Navigate, RouteObject } from "react-router-dom";
import RootLayout from "@/components/RootLayout";
import Dashboard from "@/views/root/dashboard";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        path: "dashboard",
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
