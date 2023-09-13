import {createBrowserRouter} from "react-router-dom"
import Layout from "../FileCommon/Layout"
import HomeScreen from "../pages/Homescreen"
// import Upload from "../pages/upload"


export const Mainrouter = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                index: true,
                element: <HomeScreen />
            },
        ],
    },
    // {
    //     path: "/upload-book",
    //     element: <Upload />,
    // },
])
