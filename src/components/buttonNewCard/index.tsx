import style from '../root.module.css'

interface ButtonProps {
    active: boolean | undefined ;
    name?: string;
}

export function ButtonNewCard({ active, name }: ButtonProps) {
    return(
        <button className={`${ active ? 'block' : 'hidden' } bg-grey-900 text-white w-[113px] h-[53px] rounded-lg hover:bg-grey-500 cursor-pointer transition-all duration-500 ${style['text-present-4-bold']} `} >
            + Add new {name}
        </button>
    )
}