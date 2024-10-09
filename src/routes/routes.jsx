import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/layout";
import Editor from "../pages/editor/editor";
import Preview from "../pages/preview/preview";

export const Routes = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                index: true,
                element: <Editor/>
            },
            {
                path: '/preview',
                element: <Preview/>
            }
        ]
    }
])