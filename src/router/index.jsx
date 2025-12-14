import { Navigate, useRoutes } from 'react-router-dom';
import { AppRouter } from './main';
import { ProfileRouter } from './profile';

export function Router() {
    return useRoutes([
        ...AppRouter,
        ...ProfileRouter,
        {
            path: "*",
            element: <Navigate to="/" />
        }
    ])
}