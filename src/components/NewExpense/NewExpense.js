import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
import Expenses from "../Expenses/Expenses";

const NewExpense = () => {
  return (
    <div className="new-expense">
      <ExpenseForm />
      <Expenses items={expenses}></Expenses>
    </div>
  );
};

export default NewExpense;
