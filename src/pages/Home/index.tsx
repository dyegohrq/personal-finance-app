import { useEffect, useState } from "react";
import { Container } from "../../components/Container";
import { api } from "../../components/Services/api";

export function Home() {
  const [data, setData] = useState([])


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
      <div>
        
        <div>
            <div>
              Current Balance
              {/* <span> {balance.current} </span> */}
              {/* <!-- Add balance --> */}
            </div>
            Income
            {/* <!-- Add income --> */}
            Expenses
            {/* <!-- Add expenses --> */}
        </div>
        <div>
            <div>
                Pots See Details Total Saved
                {/* <!-- Add pots data --> */}
            </div>
            <div>
                Budgets See Details
                {/* <!-- Add budgets data --> */}
            </div>
            <div>
                Transactions View All
                {/* <!-- Add transactions data --> */}
            </div>
            <div>
                Recurring Bills See Details
                {/* <!-- Add recurring bills data --> */}
            </div>
        </div>
      </div>
    </Container>
  );
}
