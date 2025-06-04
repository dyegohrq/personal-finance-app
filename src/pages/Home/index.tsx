import { Container } from "../../components/Container";
import { BalanceCard } from "../../components/BalanceCard";
import data from '../../../data.json'

export function Home() {
  return (
    <Container title="Overview" >
      <div className=" flex flex-col sm:flex-row gap-[12px] " >
        <BalanceCard label="Current Balance" amount={data.balance.current} dark />
        <BalanceCard label="Income" amount={data.balance.income}  />
        <BalanceCard label="Expenses" amount={data.balance.expenses} />
      </div>
    </Container>
  );
}
