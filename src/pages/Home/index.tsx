import { useEffect, useState } from "react";
import { Container } from "../../components/Container";
import { api } from "../../components/Services/api";
import type { DashboardProps } from "../../components/Context/context";
import { BalanceCard } from "../../components/BalanceCard";

export function Home() {
  const [data, setData] = useState<DashboardProps[]>([])


  useEffect(() => {
    async function getDashboard() {
      await api 
      .get('/data.json')
      .then((res) => {
        const data = res.data
        setData(data)
      })
      .catch((error) => {
        console.log(error)
      })
    }

    getDashboard()
  }, [])


  return (
    <Container title="Overview" >
      <BalanceCard label="Current Balance" amount={data.} />
    </Container>
  );

  
}
