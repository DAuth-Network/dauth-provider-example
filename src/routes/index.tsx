import { createBrowserRouter } from "react-router-dom"
import Sdk from "../pages/sdk";
import Dev from "../pages/stress";
import { Home } from "../pages";

const routers = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/sdk",
        element: <Sdk />,
    },
    {
        path: "/stress",
        element: <Dev />,
    }
]);
export default routers;