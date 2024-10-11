import Layout from "@/layout/layout";
import Editor from "@/pages/editor/editor";
import Login from "@/pages/login/login";
import Preview from "@/pages/preview/preview";
import Register from "@/pages/register/register";
import PrivateRoute from "@/privateRoute";
import { createBrowserRouter } from "react-router-dom";

export const Routes = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/register',
                element: <Register />
            },
            {
                path: '/preview',
                element: <Preview />
            },
            {
                element: <PrivateRoute />,
                children: [
                    {
                        index: true,
                        element: <Editor />
                    }
                ]
            }
        ]
    }
])