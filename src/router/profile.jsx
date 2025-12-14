import { Outlet } from "react-router-dom";
import Loader from "../components/Loader/Loader";
import { lazy, Suspense } from "react";

const ProfileMain = lazy(() => import("../pages/profile/home"));
const ProfileThoughts = lazy(() => import("../pages/profile/thoughts"));
const ProfileWorld = lazy(() => import("../pages/profile/world"));
const ProfileSecurity = lazy(() => import("../pages/profile/security"));
const ProfileHistorique = lazy(() => import("../pages/profile/historique"));
const ProfileRessources = lazy(() => import("../pages/profile/ressources"));

export const ProfileRouter = [
  {
    element: (
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    ),
    path: "profile",
    children :[
        {
            index:true,
            element:<ProfileMain/>
        },
        {
            path: "thoughts",
            element: <ProfileThoughts />
        },
        {
            path: "world",
            element: <ProfileWorld />
        },
        {
            path: "security",
            element: <ProfileSecurity />
        },
        {
            path: "history",
            element: <ProfileHistorique />
        },
        {
            path: "ressources",
            element: <ProfileRessources />
        }
    ]
  },
];
