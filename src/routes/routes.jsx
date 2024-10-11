import Layout from "@/layout/layout";
import EditorPage from "@/pages/editor/editor";
import LoginPage from "@/pages/login/login";
import PreviewPage from "@/pages/preview/preview";
import UserProfilePage from "@/pages/profile/profile";
import RegisterPage from "@/pages/register/register";
import PrivateRoute from "@/privateRoute";
import { createBrowserRouter } from "react-router-dom";

export const Routes = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                path: '/login',
                element: <LoginPage />
            },
            {
                path: '/register',
                element: <RegisterPage />
            },
            {
                path: '/profile/:email',
                element: <UserProfilePage />
            },
            {
                element: <PrivateRoute />,
                children: [
                    {
                        index: true,
                        element: <EditorPage />
                    }, 
                    {
                        path: '/preview',
                        element: <PreviewPage />
                    },
                ]
            }
        ]
    }
])