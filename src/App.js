import Expenses from "./components/Expenses/Expenses";
import "./components/Expenses/Expenses.css";
import NewExpense from "./components/NewExpense/NewExpense";

const App = () => {
  const expenses = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 450,
      date: new Date(2021, 5, 12),
    },
    {
      id: "e5",
      title: "Washing Machine",
      amount: 550,
      date: new Date(2021, 6, 13),
    },
    {
      id: "e6",
      title: "E-Bike",
      amount: 5250,
      date: new Date(2021, 7, 13),
    },
    {
      id: "e7",
      title: "MacBook Pro",
      amount: 1099,
      date: new Date(2021, 9, 22),
    },
    {
      id: "e7",
      title: "Solidworks software",
      amount: 400,
      date: new Date(2021, 11, 29),
    },
    {
      id: "e8",
      title: "Autocad licence",
      amount: 300,
      date: new Date(2021, 11, 29),
    },
    {
      id: "e9",
      title: "Trip to France",
      amount: 2889,
      date: new Date(2021, 12, 6),
    },
    {
      id: "e10",
      title: "Udemy Sub",
      amount: 99,
      date: new Date(2021, 12, 7),
    },
    {
      id: "e11",
      title: "Coursera",
      amount: 149,
      date: new Date(2021, 12, 9),
    },
  ];

  const addExpenseHandler = (expense) => {
    console.log("in app.js");
    console.log(expense);
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
