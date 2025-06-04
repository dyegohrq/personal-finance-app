import { Container } from "../../components/Container";
import { BalanceCard } from "../../components/BalanceCard";
import data from '../../../data.json'

export function Home() {
  return (
    <Container title="Overview" >
      <BalanceCard label="Current Balance" amount={data.balance.current} />
    </Container>
  );

  
}
