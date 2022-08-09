
export interface BudgetItemObjInterface{
    date:string;
    isPaid:boolean;
    price:number;
    title:string;
    id:string;
}
export interface BudgetListInterface{
    budgetCurrency:string;
    budgetItems:BudgetItemObjInterface[];
    handleItemUpdate:(value:string,id:string,itemProperty:string) => void,
    handleItemRemove:(id:string) => void;
}
export interface BudgetItemInterface {
    budgetCurrency: string;
    budgetItem: BudgetItemObjInterface;
    handleItemUpdate: (value: string, id: string, itemProperty: string) => void;
    handleItemRemove: (id: string) => void;
}
// Interface for BudgetTotal component
export interface BudgetTotalInteface{
    budgetPeriod:string
    budgetAmount:number;
    budgetPaid:number;
    budgetCurrency:string;
}
// Interface for Homepage
export interface HomePageInterface{
    budgetItems:BudgetItemObjInterface[];
    budgetAmount:number;
    budgetPeriod:string;
    budgetCurrency:string;
    storageMethod:string;
    setBudgetItems: React.Dispatch<React.SetStateAction<BudgetItemObjInterface[]>>;
}
// Interface for Settings page
export interface SettingsPageInterface {
    budgetAmount:number;
    budgetPeriod:string;
    budgetCurrency:string;
    storageMethod:string;
    setBudgetPeriod:React.Dispatch<React.SetStateAction<string>>;
    setBudgetCurrency:React.Dispatch<React.SetStateAction<string>>;
    setBudgetAmount:React.Dispatch<React.SetStateAction<number>>;
    setStorageMethod:React.Dispatch<React.SetStateAction<string>>;
}
// Interface for BudgetItemAdd component
export interface BudgetItemAddInterface{
    showAddItem:boolean;
    handleAddItem:(payload:BudgetItemObjInterface) => void;
    handleShowAddItem: React.Dispatch<React.SetStateAction<boolean>>;
}
