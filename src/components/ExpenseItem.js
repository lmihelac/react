import "./ExpenseItem.css";
import Card from "./Card";
import ExpenseDate from "./ExpenseDate";

const ExpenseItem = (props) => {
  const clickHandler = () => {
    alert("works");
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div onDoubleClick={clickHandler} className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      <button onClick={clickHandler}>TEst brt</button>
    </Card>
  );
};

export default ExpenseItem;
