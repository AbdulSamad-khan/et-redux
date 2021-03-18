// Action Creaters

export const setIncome = (value) => {
  // Action
  return {
    type: "SET_INCOME",
    payload: value,
  };
};

export const setExpense = (value) => {
  return {
    type: "SET_EXPENSE",
    payload: value,
  };
};

export const expenseList = (listItem) => {
  return {
    type: "EXPENSE_LIST",
    payload: listItem,
  };
};
export const incomeList = (listItem) => {
  return {
    type: "INCOME_LIST",
    payload: listItem,
  };
};

export const deleteIncomeItem = (id) => {
  return {
    type: "DELETE_INCOME",
    payload: id,
  };
};

export const deleteExpenseItem = (id) => {
  return {
    type: "DELETE_EXPENSE",
    payload: id,
  };
};
