interface BalanceCardProps{
    label: string;
    amount: number;
    dark?: boolean;
}

export function BalanceCard( { label, amount, dark }: BalanceCardProps ) {
    return(
        <h1>card balance</h1>
    )
}