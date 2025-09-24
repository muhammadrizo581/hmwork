import { lazy, memo } from "react";
import { useRoutes } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
const Home = lazy(() => import("@/pages/home"));
const About = lazy(() => import("@/pages/about"));

const AppRouter = () => {
  const routes = useRoutes([
    {
      path: "",
      element: <MainLayout />,
      children: [
        { index: true, element: <Home /> },
        { path: "/about", element: <About /> },
      ],
    },
  ]);
  return routes;
};

export default memo(AppRouter);
