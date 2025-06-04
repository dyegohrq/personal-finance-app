interface BalanceCardProps{
    label: string;
    amount: number;
    dark?: boolean;
}

export function BalanceCard( { label, amount, dark }: BalanceCardProps ) {
    return(
        <div>
            <h1>{label}</h1>
            <h1>{amount}</h1>
            <h1>{dark}</h1>
        </div>
    )
}