import { Link } from "react-router";
import type { SidebarMenuProps } from "../SidebarMenuMobile";

export function SidebarMenuDescktop( props: SidebarMenuProps ) {
    return(
        <Link to={props.url} className={` w-full h-[56px] flex  gap-[16px] items-center ${ props.isActiveMenu ? 'justify-start' : 'justify-center' } ${ props.isActiveMenu ? 'pl-[32px]' : '' }  ${ props.isActive ? 'bg-white' : '' } `} >
            <span> <img src={props.icon} alt={props.label} /> </span>
            {
                props.isActiveMenu ? <span> {props.label} </span> : ''
            }
        </Link>
    )   
}