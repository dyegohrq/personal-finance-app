import type { JSX } from "react";
import type React from "react";
import style from '../root.module.css'
import { IoIosCloseCircleOutline } from "react-icons/io";
import { useNavigate } from "react-router";

interface ModalProps {
    children: React.ReactNode;
    name: string;
}

export function Modal({ children, name }: ModalProps): JSX.Element {
    const navigate = useNavigate()

    function handleClose() {
        navigate('..')
    }

    return(
        <div className="bg-black/40 w-full h-full fixed top-0 left-0 flex items-center justify-center  " >
            <div className="bg-white rounded-lg py-[24px] px-[20px] w-[90%] max-w-[560px] " >
                <div className="flex justify-between items-center pb-[20px] " >
                    <h1 className={`${style['text-present-1']} text-grey-900 `} >Add new {name}</h1>
                    <button
                        onClick={handleClose}
                        className=" cursor-pointer "
                    >
                        <IoIosCloseCircleOutline size={32} className=" text-grey-500 " />
                    </button>
                </div>
                {children}
            </div>
        </div>
    )
}