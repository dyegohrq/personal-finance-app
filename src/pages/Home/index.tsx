import { Container } from "../../components/Container";

export function Home() {
  return (
    <Container title="Overview" >
      <div>
        
        <div>
            Current Balance
            {/* <!-- Add balance --> */}
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
