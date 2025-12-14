import { lazy, Suspense } from "react";
import { Outlet } from "react-router-dom";
import Loader from "../components/Loader/Loader";

const Home = lazy(()=>import("../pages/home/home"));
const Auth = lazy(()=>import("../pages/auth/index"))
const About = lazy(()=>import("../pages/home/about"))
const Techniques = lazy(()=>import("../pages/home/techniques"))

export const AppRouter = [
  {
    element: (
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    ),
    children: [
      {
        path: "/",
        children:[
          {
            index: true,
            element: <Home />
          },
          {
            path: 'about',
            element: <About />
          },
          {
            path: 'techniques',
            element: <Techniques />
          }
        ]
      },
      {
        path: "/auth",
        element: <Auth />
      }
    ]
  }
];