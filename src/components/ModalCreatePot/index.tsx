import React, { useState } from "react";
import { Modal } from "../Modal";
import style from '../root.module.css'
import { ColorSelected } from "../colorSelected";

export function ModalCreatePot() {
    const [potName, setPotName] = useState('')
    const [target, setTarget] = useState('')
    const [color, setColor] = useState('#277C78')

    function handleSubmit(e: React.FormEvent) {
        e.preventDefault()
    }

    return(
        <Modal name="Pot" >
            <div className="" >
                <p className={`${`style['text-present-4']`} text-grey-500 pb-[20px] `} >
                    Create a pot to set savings targets. These can help keep you on track as you save for special purchases.
                </p>

                <form onSubmit={handleSubmit} >
                    <label htmlFor="potName"  >
                        <span className={`${style['text-present-5-bold']} text-grey-500 `} >Pot Name</span>
                        <input 
                            type="text" 
                            name="potName" 
                            id="potName" 
                            value={potName}
                            onChange={ (e) => setPotName(e.target.value) }
                            maxLength={30}
                            className={` border border-beige-500 outline-0 w-full px-[20px] py-[12px] rounded-lg mt-[4px] ${style['text-present-4']} text-grey-900 `}
                        />
                        <span 
                            className={` w-full flex items-end justify-end ${style['text-present-5']} text-grey-500 `} 
                            > { potName === '' ? '' : potName.length + ' of' } 30 characters left 
                        </span>
                    </label>
                    <label htmlFor="target">
                        <span className={`${style['text-present-5-bold']} text-grey-500 `} >Target</span>
                        <input 
                            type="text" 
                            name="target" 
                            id="target" 
                            value={target}
                            placeholder="$"
                            onChange={ (e) => setTarget(e.target.value) }
                            className={` border border-beige-500 outline-0 w-full px-[20px] py-[12px] rounded-lg mt-[4px] ${style['text-present-4']} text-grey-900 `}
                        />
                    </label>
                    <label>
                        <span className={`${style['text-present-5-bold']} text-grey-500 `} >Color Tag</span>
                        <ColorSelected selected={color} setSelected={setColor} />
                    </label>
                </form>
            </div>
        </Modal>
    )
}