// react router
import type { RouteObject } from "react-router-dom";
// pages
import { Landing , Login , Register , SetProfile , Chat , Setting , Home , PersonalInfo , Security , Plans , Bill } from "../pages";
// components
import { ProtectedRoute } from "../components";

const ChatRoutes : RouteObject[] = [
    {
        index: true,
        element : <Chat />
    },
    {
        path: "/chat/setting",
        element: <Setting />,
        children: [
            {
                path: "/chat/setting/personal-info",
                element: <PersonalInfo />
            },
            {
                path: "/chat/setting/security",
                element: <Security />
            },
            {
                path: "/chat/setting/bill",
                element: <Bill />
            },
            {
                path: "/chat/setting/plans",
                element: <Plans />
            }
        ]
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



export const ShowLayout = [
    "/"
]