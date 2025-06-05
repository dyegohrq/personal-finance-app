import { createContext, useState, type ReactNode } from "react"

interface DashboardContextData {
    setActive: boolean
}

interface DashboardProviderProps {
    children: ReactNode;
}

export const DashboardContext = createContext({} as DashboardContextData )

export default function DashboardProvider( {children}: DashboardProviderProps ) {
    const [active, setActive] = useState(false)

    return(
        // <DashboardContext.Provider
        //     value={
                
        //     }
        // >
        //     {children}
        // </DashboardContext.Provider>
    
        <div>
            
        </div>
    )
}