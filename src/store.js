import { createStore } from "redux";

const initialState = {
  income: 0,
  expenses: 0,
};

const financeReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_INCOME":
      return {
        ...state,
        income: state.income + action.payload,
      };
    case "ADD_EXPENSE":
      return {
        ...state,
        income: state.expenses + action.payload,
      };

    default:
      state;
  }
};

export default createStore(financeReducer);
