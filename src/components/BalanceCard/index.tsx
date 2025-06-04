import style from '../root.module.css'

interface BalanceCardProps{
    label: string;
    amount: number;
    dark?: boolean;
}

export function BalanceCard( { label, amount, dark }: BalanceCardProps ) {
    const amountFormated = amount.toLocaleString( 'en-US', {
        style: 'currency',
        currency: 'USD'
    } )

    return(
        <div className={` ${ dark ? 'bg-grey-900' : 'bg-white' } w-full p-[20px] rounded-xl `} >
            <h3 className={`${style['text-present-4']} ${ dark ? 'text-white': 'text-grey-500' } mb-[12px] `} > {label} </h3>
            <span className={`${style['text-present-1']} ${dark ? 'text-white' : 'text-grey-900'} `} >{ amountFormated } </span>
        </div>
    )
}