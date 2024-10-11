import Layout from "@/layout/layout";
import EditorPage from "@/pages/editor/editor";
import LoginPage from "@/pages/login/login";
import PreviewPage from "@/pages/preview/preview";
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
                path: '/preview',
                element: <PreviewPage />
            },
            {
                element: <PrivateRoute />,
                children: [
                    {
                        index: true,
                        element: <EditorPage />
                    }
                ]
            }
        ]
    }
])