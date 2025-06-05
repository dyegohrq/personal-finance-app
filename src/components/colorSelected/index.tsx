import style from '../root.module.css'
import { useState } from "react";
import IconSelected from '/assets/images/icon-selected.svg'
import IconTriangle from '/assets/images/icon-caret-down.svg'

const colors = [
    { label: 'Grey900', value: '#201F24'},
    { label: 'Grey500', value: '#696868'},
    { label: 'Grey300', value: '#B3B3B3'},
    { label: 'Grey100', value: '#F2F2F2'},
    { label: 'Green', value: '#277C78'},
    { label: 'Yellow', value: '#F2CDAC'},
    { label: 'Cyan', value: '#82C9D7'},
    { label: 'Navy', value: '#626070'},
    { label: 'Red', value: '#C94736'},
    { label: 'Purple', value: '#826CB0'},
    { label: 'LighterPurple', value: '#AF81BA'},
    { label: 'Turquoise', value: '#597C7C'},
    { label: 'Brown', value: '#93674F'},
    { label: 'Magenta', value: '#934F6F'},
    { label: 'Blue', value: '#3F82B2'},
    { label: 'NavyGrey', value: '#97A0AC'},
    { label: 'ArmyGray', value: '#7F9161'},
    { label: 'Gold', value: '#CAB361'},
    { label: 'Orange', value: '#BE6C49'},
    { label: 'White', value: '#FFFFFF'}
];

interface ColorSelectedProps {
    selected: string;
    setSelected: (color: string) => void;
}

export function ColorSelected( { selected, setSelected }:ColorSelectedProps ) {
    const [open, setOpen] = useState(false) 

    console.log(open)

    return(
        <div className=' relative ' >
            <button 
                onClick={() => setOpen(!open)}
                className=" w-full border cursor-pointer border-beige-500 rounded-lg flex items-center justify-between py-[12px] px-[20px] " >
                <div className=" flex items-center gap-[12px] " >
                    <div className={`w-4 h-4 rounded-full `} style={{ backgroundColor: selected } } ></div>
                    <span className={` ${style['text-present-4']} text-grey-900 `} >
                        { colors.find(c => c.value === selected)?.label || 'Select color' }
                    </span>    
                </div>
                <img src={IconTriangle} alt="" className={`${ open ? 'rotate-180' : '' }`} />            
            </button>
            {
                open && (
                    <div className=' bg-white shadow-lg rounded-lg max-h-40 overflow-y-auto ' >
                        {
                            colors.map( color => (
                                <button
                                    key={color.value}
                                    onClick={ () => {
                                        setSelected(color.value);
                                        setOpen(false);
                                    } } 
                                    className=' flex w-full cursor-pointer border-b border-grey-100 items-center justify-between py-[12px] px-[20px] ' >
                                    <div className=' flex items-center gap-[12px]' >
                                        <div className={' w-4 h-4 rounded-full '} style={{backgroundColor: color.value}} ></div>
                                        <span> {color.label} </span>
                                    </div>
                                    <img src={IconSelected} alt="" />
                                </button>
                            ))
                        }
                    </div>
                )
            }

        </div>
    )
}