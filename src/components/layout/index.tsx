import { Outlet } from "react-router";
import { Sidebar } from "../Sidebar";

export function Layout() {
    return(
        <>
            <Sidebar/>
            <Outlet/>
        </>
    )
}