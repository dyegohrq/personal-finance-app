import { Link } from "react-router";
import type { SidebarMenuProps } from "../SidebarMenuMobile";
import style from '../root.module.css'

export function SidebarMenuDescktop( props: SidebarMenuProps ) {
    return(
        <Link to={props.url} className={` w-full h-[56px] flex  gap-[16px] items-center rounded-r-lg  ${ props.isActive ? ' border-l-4 border-green' : '' } ${ props.isActiveMenu ? 'justify-start' : 'justify-center' } ${ props.isActiveMenu ? 'pl-[32px]' : '' }  ${ props.isActive ? 'bg-white' : '' } `} >
            <span> <img src={props.icon} alt={props.label} className={ ` ${props.isActive ? 'filter-green' : ''} ` }/> </span>
            {
                props.isActiveMenu ? <span className={`${style['text-present-5-bold']} hidden md:block ${props.isActive ? 'text-grey-900' : 'text-grey-300'} `} > {props.label} </span>  : ''
            }
        </Link>
    )   
}