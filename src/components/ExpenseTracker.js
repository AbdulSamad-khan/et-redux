import React, { Component } from "react";
import { connect } from "react-redux";
import CurrentBalance from "./CurrentBalance";
import {
  setIncome,
  setExpense,
  incomeList,
  expenseList,
  deleteIncomeItem,
  deleteExpenseItem,
} from "../actions";
class ExpenseTracker extends Component {
  sumIncome() {
    return this.props.listOfIncome.reduce((acc, element) => {
      return parseInt(acc) + parseInt(element);
    }, 0);
  }
  sumExpense() {
    return this.props.listOfExpense.reduce((acc, element) => {
      return parseInt(acc) + parseInt(element);
    }, 0);
  }
  renderIncomes() {
    // list incomes
    return this.props.listOfIncome.map((elements, id) => {
      return (
        <div key={id}>
          Income{id + 1}: {elements}
          <button onClick={() => this.props.deleteIncomeItem(id)}>
            Delete Income
          </button>
        </div>
      );
    });
  }
  // list expenses
  renderExpenses() {
    return this.props.listOfExpense.map((elements, id) => {
      return (
        <div key={id}>
          Expense:{id + 1} {elements}
          <button onClick={() => this.props.deleteExpenseItem(id)}>
            Delete Expense
          </button>
        </div>
      );
    });
  }
  render() {
    console.log(this.props);
    return (
      <div>
        <input
          type="text"
          value={this.props.incomeInput}
          onChange={(e) => this.props.setIncome(e.target.value)}
          placeholder="Enter Income"
        />
        <br />
        <button onClick={() => this.props.incomeList(this.props.incomeInput)}>
          Add Income
        </button>
        {this.renderIncomes()}
        <br />
        <input
          type="text"
          value={this.props.expenseInput}
          onChange={(e) => this.props.setExpense(e.target.value)}
          placeholder="Enter Expense"
        />
        <br />
        <button onClick={() => this.props.expenseList(this.props.expenseInput)}>
          Add Expense
        </button>
        {this.renderExpenses()}
        <br />
        <h3>TOTAL INCOME: {this.sumIncome()}</h3>
        <h3>TOTAL EXPENSE: {this.sumExpense()}</h3>
        <CurrentBalance
          totalIncome={this.sumIncome()}
          totalExpense={this.sumExpense()}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return state;
};
export default connect(mapStateToProps, {
  // action creaters
  setIncome: setIncome,
  setExpense: setExpense,
  incomeList: incomeList,
  expenseList: expenseList,
  deleteIncomeItem: deleteIncomeItem,
  deleteExpenseItem: deleteExpenseItem,
})(ExpenseTracker);
