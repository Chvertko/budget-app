import { render } from "@testing-library/react";
import { Link } from "react-router-dom";
import currencyCodes from "../data/currency-codes";
import { SettingsPageInterface } from "../interfaces";

export const SettingsPage = (props:SettingsPageInterface) => {
    return(
        <>
        <header>
            <h2>Настройки</h2>
            <Link className="btn btn-cross btn-unstyled" to="/"/>
        </header>
        <fieldset>
            <label htmlFor="period">Бюджетный период</label>
            <select 
            onChange={(event) => props.setBudgetPeriod(event.target.value)}
            name="period" 
            id="period"
            defaultValue={props.budgetPeriod}
            >
                <option value="daily">Дневной</option>
                <option value="mounthly">Месячный</option>
                <option value="yearly">Годовой</option>
            </select>
        </fieldset>
        <fieldset>
            <label htmlFor="currency">Валюта</label>
            <input 
            name="currency"
            id="currency"
            onChange={(event) => props.setBudgetCurrency(event.target.value)}
            defaultValue={props.budgetCurrency}
            list="currencyCodes"
            />
            <datalist id="currencyCodes">
                {currencyCodes.map(code => <option key={code} value={code} ></option>)}
            </datalist>
        </fieldset>
        <fieldset>
            <label htmlFor="budget"> Размер бюджета:</label>
            <input
            onChange={(event) => props.setBudgetAmount(parseInt(event.target.value))}
            type="number"
            name="budget"
            id="budget"
            defaultValue={props.budgetAmount} 
            />
        </fieldset>
        <fieldset>
            <label htmlFor="storage">Способ хранения данных</label>
            <select
            onChange={(event) => props.setStorageMethod(event.target.value)} 
            name="storage" 
            id="storage"
            defaultValue={props.storageMethod}>
                <option value="none">None</option>
                <option value="local">Local</option>
                <option value="session">Session</option>
            </select>
        </fieldset>
        <button><Link to='/'>Домашняя страница</Link></button>
        <p><small><em>Все изменения сохраняются автоматически</em></small></p>
        
    </>
    )
}