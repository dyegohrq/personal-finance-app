import { Link } from 'react-router';
import style from '../root.module.css'

export interface SidebarMenuProps {
    label: string;
    url: string;
    icon: string;
    isActive?: boolean;
    isActiveMenu?: boolean;
}

export function SidebarMenuMobile(props: SidebarMenuProps) {
    return(
        <Link 
            to={`${props.url}`} 
            className={` w-full h-full flex flex-col items-center justify-center gap-[4px] rounded-t-2xl border-b-4${ props.isActive ? 'border-b-green' : 'border-transparent' } ${ props.isActive ? 'active' : '' } ${props.isActive ? 'bg-white' : ''} `}     
        >
            <span className='text-[24px]' > 
                <img src={props.icon} alt="" className={`${ props.isActive ? ' filter-green ' : '' }`} />  
            </span>
            <span className={`${style['text-present-5-bold']} hidden md:block ${props.isActive ? 'text-grey-900' : 'text-grey-300'} `} > {props.label} </span>
        </Link>
    )
}