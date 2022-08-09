import { BudgetTotalInteface } from "../interfaces";

export const BudgetTotal = (props:BudgetTotalInteface) => {
    return(
        <div className="budget-total">
            <h2>
                <span className="budget-period">Ваш {props.budgetPeriod}</span>
                {' '}
                <span className="budget-label">Бюджет:</span>
                {' '}
                <span
                className={`budget-total ${props.budgetAmount - props.budgetPaid > 0? 'budget-total-positive' : 'budget-total-negative'}`}
                >
                    {props.budgetAmount - props.budgetPaid}
                </span>
                {' '}
                <span className="budget-currency">{props.budgetCurrency}</span>
            </h2>
        </div>
    )
}