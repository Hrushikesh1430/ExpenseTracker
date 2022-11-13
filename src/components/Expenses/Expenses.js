import React, { useState } from "react";
import ExpenseList from "./ExpensesList";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesChart from "./ExpensesChart";
const Expenses = (props) => {
  const [filteredyear, setfiltered] = useState("2020");
  const changeyearHandler = (enteredyear) => {
    // const year = {
    //   ...enteredyear,
    // };
    setfiltered(enteredyear);
  };
  const filteredexpense = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredyear;
  });
  // let expenseContent = <p>No expense found</p>;
  // if (filteredexpense.length > 0) {
  //   expenseContent = filteredexpense.map((expense) => (
  //     <ExpenseItem
  //       key={expense.id}
  //       title={expense.title}
  //       amount={expense.amount}
  //       date={expense.date}
  //     />
  //   ));
  // }

  return (
    <div>
      <Card className="expenses">
        <ExpensesChart expenses={filteredexpense} />
        <ExpensesFilter
          initial={filteredyear}
          onChangeYear={changeyearHandler}
        />
        {<ExpenseList items={filteredexpense} />}
      </Card>
    </div>
  );
};
export default Expenses;
