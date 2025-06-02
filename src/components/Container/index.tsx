import type React from "react";
import style from '../root.module.css'

interface ContainerProps {
    title?: string,
    children: React.ReactNode,
}

export function Container({title, children}: ContainerProps):React.JSX.Element {
    return(
        <div className=" w-full h-screen px-[16px] py-[24px] " >
            <h1 className={`${style['text-present-1']} text-gray-900 `} >{ title }</h1>
            {children}
        </div>
    )
}