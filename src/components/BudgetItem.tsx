import { BudgetItemInterface, BudgetItemObjInterface } from "../interfaces";
import { IconBin } from "./IconBin";

export const BudgetItem = (props:BudgetItemInterface) => {
    return(
        <div className="budget-item">
        <div className="budget-item-paid">
          {/* Checkbox to mark the item as paid */}
          <input
            className="custom-checkbox-checkbox"
            type="checkbox"
            id={props.budgetItem.id}
            checked={props.budgetItem.isPaid}
            onChange={(event) => props.handleItemUpdate(event.target.value, props.budgetItem.id, 'isPaid')}
          />
          <label className="custom-checkbox-label" htmlFor={props.budgetItem.id} />
      </div>
      <div className="budget-item-title">
        <input 
        type="text"
        value={props.budgetItem.title}
        onChange={(event)=> props.handleItemUpdate(event.target.value, props.budgetItem.id, 'title')}
        />
      </div>
      <div className="budget-item-date">
        <input 
        type="text" 
        value={props.budgetItem.date}
        onChange={(event)=> props.handleItemUpdate(event.target.value,props.budgetItem.id,'date')}
        />
      </div>
      <div className="budget-item-price">
        <input 
        type="text"
        value={props.budgetItem.price}
        onChange={(event)=> props.handleItemUpdate(event.target.value,props.budgetItem.id,'price')}
         />
         {' '}
         <span>{props.budgetCurrency}</span>
      </div>
      <div className="budget-item-remove">
        <button
        className="btn btn-remove"
        onClick={()=> props.handleItemRemove(props.budgetItem.id)}
        >
            <IconBin name="bin"/>
        </button>
      </div>
    </div>
    )   
}