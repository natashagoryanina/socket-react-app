import HomePage from "../pages/HomePage";
import TickerPage from "../pages/TickerPage";

export const mainRoutes = [
    {
        name: "Home",
        path: "/",
        exact: true,
        component: HomePage,
    },
    {
        name: "Ticker Server",
        path: "/ticker",
        exact: false,
        component: TickerPage,
    },
];