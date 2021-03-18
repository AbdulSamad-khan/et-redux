import React from "react";

const CurrentBalance = (props) => {
  console.log();
  return (
    <div>
      <h3> CURRENT BALANCE: {props.totalIncome - props.totalExpense}</h3>
    </div>
  );
};
export default CurrentBalance;
