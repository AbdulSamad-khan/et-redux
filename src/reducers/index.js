import { combineReducers } from "redux";
const incomeInput = (income = "", action) => {
  if (action.type === "SET_INCOME") {
    return action.payload;
  }
  return income;
};

const expenseInput = (expense = "", action) => {
  if (action.type === "SET_EXPENSE") {
    return action.payload;
  }
  return expense;
};

const listOfIncome = (incomeList = [], action) => {
  if (action.type === "INCOME_LIST") {
    return [...incomeList, action.payload];
  } else if (action.type === "DELETE_INCOME") {
    return incomeList.filter((e, id) => {
      return id !== action.payload;
    });
  }
  return incomeList;
};
const listOfExpense = (expenseList = [], action) => {
  if (action.type === "EXPENSE_LIST") {
    return [...expenseList, action.payload];
  } else if (action.type === "DELETE_EXPENSE") {
    return expenseList.filter((e, id) => {
      return id !== action.payload;
    });
  }
  return expenseList;
};
export const reducers = combineReducers({
  // reducers
  incomeInput: incomeInput, // centralize repository on top of store
  expenseInput: expenseInput,
  listOfIncome: listOfIncome,
  listOfExpense: listOfExpense,
});
