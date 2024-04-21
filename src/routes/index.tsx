// react router
import type { RouteObject } from "react-router-dom";
// pages
import { Landing , Login , Register , SetProfile , Chat , Setting , Home } from "../pages";
// components
import { ProtectedRoute } from "../components";

const ChatRoutes : RouteObject[] = [
    {
        index: true,
        element : <Chat />
    },
    {
        path: "/chat/setting",
        element: <Setting />
    }
]

export const AppRoutes : RouteObject[] = [
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
            <SetProfile/>
        </ProtectedRoute>
    },
    {
        path: "/chat",
        element: <ProtectedRoute>
            <Home />
        </ProtectedRoute>,
        children: ChatRoutes
    }
]



export const hiddenLayout = [
    "/login",
    "/register",
    "/chat",
    "/setprofile",
    "/chat/setting"
]