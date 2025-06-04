import { createBrowserRouter } from "react-router";
import Layout  from "./components/layout";
import { Home } from "./pages/Home";
import { Budgets } from "./pages/Budgets";
import { Pots } from "./pages/Pots";
import { Recurring } from "./pages/Recurring";
import { Transactions } from "./pages/Transactions";

const router = createBrowserRouter([
    {
        element: <Layout/>,
        children: [
            {
                path: '/',
                element: <Home/>
            },
            {
                path: '/budgets',
                element: <Budgets/>
            },
            {
                path: '/pots',
                element: <Pots/>
            },
            {
                path: '/recurring',
                element: <Recurring/>
            },
            {
                path: '/transactions',
                element: <Transactions/>
            }
        ]
    }
])

export {router}