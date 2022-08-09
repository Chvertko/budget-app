import { BudgetItemObjInterface, BudgetListInterface } from "../interfaces";
import { BudgetItem } from "./BudgetItem";

const BudgetList = (props: BudgetListInterface) => {
    return (
      <div className="budget-list">
        {props.budgetItems.map((item: BudgetItemObjInterface) => {
          return (
            <BudgetItem
              key={item.id}
              budgetCurrency={props.budgetCurrency}
              budgetItem={item}
              handleItemUpdate={props.handleItemUpdate}
              handleItemRemove={props.handleItemRemove}
            />
          )
        })}
      </div>
    )
  }
  
  export default BudgetList