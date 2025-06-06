import { Outlet } from "react-router";
import { Container } from "../../components/Container";

export function Pots() {
    

    return(
        <Container title="Pots" button name='Pot' url="/pots"  >
            <div>
                
            </div>

            <Outlet/>
        </Container>
    )
}

/*

Overview
  Transactions
  Budgets
  Pots
  Recurring Bills

  Minimize Menu

  Pots

  Add New Pot

  <!-- Add pots data -->

  <!-- Add/Edit pot start -->

  Add New Pot
  Create a pot to set savings targets. These can help keep you on track as you save for special purchases.

  Edit Pot
  If your saving targets change, feel free to update your pots.
  
  Pot Name
  
  Target
  
  Theme
  Green
  Yellow
  Cyan
  Navy
  Red 
  Purple
  Turquoise
  Brown
  Magenta
  Blue
  Navy Grey
  Army Green
  Pink
  Gold
  Orange

  Add Pot / Save Changes

  <!-- Add/Edit budget end -->

  <!-- Delete pot start -->

  Delete '<!-- Pot name -->'

  Are you sure you want to delete this pot? This action cannot be reversed, and all the data inside it will be removed forever.

  Yes, Confirm Deletion
  No, Go Back

  <!-- Delete pot end -->

  <!-- Add to pot start -->;

  Add to '<!-- Pot name -->'

  Add money to your pot to keep it separate from your main balance. As soon as you add this money, it will be deducted from your current balance.

  New Amount
  Target of <!-- pot target -->

  Amount to Add

  Confirm Addition

  <!-- Add to pot end -->

  <!-- Withdraw from pot start -->

  Withdraw from '<!-- pot name -->'

  Withdraw from your pot to put money back in your main balance. This will reduce the amount you have in this pot.

  New Amount
  Target of <!-- pot target -->

  Amount to Withdraw

  Confirm Withdrawal

*/