import { createContext, useState, type ReactNode } from "react"

interface DashboardContextData {
    dashboard: string[];
}

export interface DashboardProps {
    balance: {
        current: number;
        income: number;
        expenses: number;
    },
    transactions: [
        {
            avatar: string;
            name: string;
            category: string;
            date: string;
            amount: string;
            recurring: boolean;
        }
    ],
    budgets: [
        {
            category: string;
            maximum: number;
            theme: string;
        }
    ],
    pots: [
        {
            name: string;
            target: number;
            total: number;
            theme: string;
        }
    ]
}

interface DashboardProviderProps {
    children: ReactNode;
}

export const DashboardContext = createContext({} as DashboardContextData )

export default function DashboardProvider( {children}: DashboardProviderProps ) {
    const [dashboard, setDashboard] = useState([])

    // return(
    //     <DashboardContext.Provider
    //         value={
    //             dashboard
    //         }
    //     >
    //         {children}
    //     </DashboardContext.Provider>
    // )
}