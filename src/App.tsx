import { useEffect, useState } from "react"
import { Route,Routes } from "react-router-dom"
import { BrowserRouter } from "react-router-dom"
import { BudgetItemObjInterface } from "./interfaces"
import  HomePage  from "./pages/homePage"
import { SettingsPage } from "./pages/settings"
import '../src/styles.css'

 const App = () =>{
    const [budgetItems,setBudgetItems] = useState<BudgetItemObjInterface[]>([])
    const [budgetPeriod,setBudgetPeriod] = useState('mouthly')
    const [budgetCurrency,setBudgetCurrency] = useState('USD')
    const [budgetAmount,setBudgetAmount] = useState(2500)
    const [storageMethod,setStorageMethod] = useState('none')

    useEffect(() => {
        if(window && window.sessionStorage && window.sessionStorage.getItem('budget-app-settings')){
            
            const recoveredSettings = window.sessionStorage.getItem('budget-app-settings')
        
            if (recoveredSettings){
                const {oldBudgetPeriod,oldBudgetCurrency,oldBudgetAmount,oldStorageMethod} = JSON.parse(recoveredSettings)
                

                setBudgetPeriod(oldBudgetPeriod)
                setBudgetCurrency(oldBudgetCurrency)
                setBudgetAmount(oldBudgetAmount)
                setStorageMethod(oldStorageMethod)

            }
        }else if (window && window.localStorage && window.localStorage.getItem('budget-app-settings')!== null && window.localStorage.getItem('budget-app-settings')!.length > 0){
            
            const recoveredSettings = window.localStorage.getItem('budget-app-settings')
            if (recoveredSettings){
                const {oldBudgetPeriod,oldBudgetCurrency,oldBudgetAmount,oldStorageMethod} = JSON.parse(recoveredSettings)
                

                setBudgetPeriod(oldBudgetPeriod)
                setBudgetCurrency(oldBudgetCurrency)
                setBudgetAmount(oldBudgetAmount)
                setStorageMethod(oldStorageMethod)

            }
            
        }
        if (window && window.sessionStorage && window.sessionStorage.getItem('budget-app') !== null && window.sessionStorage.getItem('budget-app')!.length > 0 ){
            const recoveredItems = window.sessionStorage.getItem('budget-app')
            if(recoveredItems){
                const {oldItems} = JSON.parse(recoveredItems)
                setBudgetItems(oldItems)
            }
        }else if(window && window.localStorage && window.localStorage.getItem('budget-app')!== null && window.localStorage.getItem('budget-app')!.length > 0){
            const recoveredItems = window.localStorage.getItem('budget-app')
            if (recoveredItems) {
                const {oldItems} = JSON.parse(recoveredItems)
                setBudgetItems(oldItems)
            }

        }
    },[])
    useEffect(() => {
        if(storageMethod === 'session'){
            window.sessionStorage.setItem('budget-app',JSON.stringify({
                oldItems:budgetItems
            }))
            window.localStorage.removeItem('budget-app')
        }else if (storageMethod ==='local'){
            window.localStorage.setItem('budget-app',JSON.stringify({
                oldItems:budgetItems
            }))
            window.sessionStorage.removeItem('budget-app')
        }else if (storageMethod === 'none'){
            window.localStorage.removeItem('budget-app')
            window.sessionStorage.removeItem('budget-app')
        }
    },[budgetItems,storageMethod])
    useEffect(() => {
        if(storageMethod === 'session'){
            window.sessionStorage.setItem('budget-app-settings',JSON.stringify({
                oldBudgetPeriod:budgetPeriod,
                oldBudgetAmount:budgetAmount,
                oldBudgetCurrency:budgetCurrency,
                oldStorageMethod:storageMethod
            }))
            window.localStorage.removeItem('budget-app-settings')
        } else if (storageMethod === 'local'){ 
            window.localStorage.setItem('budget-app-settings',JSON.stringify({
                oldBudgetPeriod:budgetPeriod,
                oldBudgetAmount:budgetAmount,
                oldBudgetCurrency:budgetCurrency,
                oldStorageMethod:storageMethod
            }))
            window.sessionStorage.removeItem('budget-app-settings')
        }else if(storageMethod === 'none'){
            window.localStorage.removeItem('budget-app-settings')
            window.sessionStorage.removeItem('budget-app-settings')
        }
    },[budgetPeriod,budgetCurrency,budgetAmount,storageMethod])
    return(
        <div className="app">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={
                      <HomePage
                      budgetItems={budgetItems}
                      setBudgetItems={setBudgetItems}
                      budgetAmount={budgetAmount}
                      budgetPeriod={budgetPeriod}
                      budgetCurrency={budgetCurrency}
                      storageMethod={storageMethod}
                  />
                    }>
                        
                    </Route>
                    <Route path="/settings" element={
                      <SettingsPage
                      budgetPeriod={budgetPeriod}
                      budgetCurrency={budgetCurrency}
                      budgetAmount={budgetAmount}
                      storageMethod={storageMethod}
                      setBudgetPeriod={setBudgetPeriod}
                      setBudgetCurrency={setBudgetCurrency}
                      setBudgetAmount={setBudgetAmount}
                      setStorageMethod={setStorageMethod}
                  />
                    }>
                        
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default App
