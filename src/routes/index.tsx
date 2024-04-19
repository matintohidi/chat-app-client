// react router
import type { RouteObject } from "react-router-dom";
// pages
import { Landing , Login , Register , Home , SetProfile } from "../pages";
// components
import { ProtectedRoute } from "../components";

const AppRoutes : RouteObject[] = [
    {
        path: "/",
        element: <ProtectedRoute>
            <Landing />
        </ProtectedRoute>
    },
    {
        path: "/login",
        element: <ProtectedRoute userLogin={true}>
            <Login />
        </ProtectedRoute>
    },
    {
        path: "/register",
        element: <ProtectedRoute userLogin={true}>
            <Register />
        </ProtectedRoute>
    },
    {
        path: "/setprofile",
        element: <ProtectedRoute userLogin={true}>
            <SetProfile />
        </ProtectedRoute>
    },
    {
        path: "/chat",
        element: <ProtectedRoute>
            <Home />
        </ProtectedRoute>
    },
    {
        path: "/chat/setting",
        element: <ProtectedRoute>
            <Home />
        </ProtectedRoute>
    }
]

export const hiddenLayout = [
    "/login",
    "/register",
    "/chat",
    "/setprofile",
    "/chat/setting"
]

export default AppRoutes;