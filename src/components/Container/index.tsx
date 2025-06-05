import type React from "react";
import style from '../root.module.css'
import { ButtonNewCard } from "../buttonNewCard";

interface ContainerProps {
    title?: string,
    children: React.ReactNode,
    button?: boolean;
    name?: string;
    url?: string;
}

export function Container({title, children, button, name, url}: ContainerProps):React.JSX.Element {
    return(
        <div className={`w-full h-screen px-[16px] py-[24px] `} >
            <div className=" flex items-center justify-between " >
                <h1 className={`${style['text-present-1']} text-gray-900 mb-[20px] `} >{ title }</h1>
                <ButtonNewCard active={button} name={name} url={url} />
            </div>
            {children}
        </div>
    )
}