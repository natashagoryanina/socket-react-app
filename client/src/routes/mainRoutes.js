import HomePage from "../pages/HomePage";
import TickerPage from "../pages/TickerPage";

export const mainRoutes = [
    {
        name: "Home",
        path: "/",
        exact: true,
        element: <HomePage/>,
    },
    {
        name: "Ticker Service",
        path: "/ticker",
        exact: false,
        element: <TickerPage/>,
    },
];