import { useReducer } from "react";

const initialState = {
  //form inputs
  amount: "",
  term: "",
  rate: "",
  type: "",

  //calulator results
  monthlyPayment: 0,
  totalInterest: 0,
  totalPayment: 0,

  //error messages
  errors: {
    amount: "",
    term: "",
    rate: "",
    type: "",
  },
};

function calculatorReducer(state, action) {
  switch (action.type) {
    case "UPDATE_FIELD":
      return {
        ...state,
        [action.field]: action.value,
      };

    case "UPDATE_TYPE":
      return {
        ...state,
        type: action.value,
      };

    case "CLEAR_FORM":
      return initialState;

    case "CALCULATE": {
      const { amount, term, rate, type } = state;

      const errors = {
        amount: amount ? "" : "This field is required",
        term: term ? "" : "This field is required",
        rate: rate ? "" : "This field is required",
        type: type ? "" : "This field is required",
      };

      const hasErrors = Object.values(errors).some((error) => error !== "");
      if (hasErrors) {
        return { ...state, errors };
      }

      // Convert inputs to numbers
      const numAmount = parseFloat(amount);
      const numTerm = parseFloat(term);
      const numRate = parseFloat(rate);
      const n = numTerm * 12;

      let monthlyPayment = 0,
        totalInterest = 0,
        totalPayment = 0;

      if (type === "repayment") {
        const r = numRate / 100 / 12;
        monthlyPayment =
          (numAmount * (r * Math.pow(1 + r, n))) / (Math.pow(1 + r, n) - 1);
        totalInterest = monthlyPayment * n - numAmount;
        totalPayment = numAmount + totalInterest;
      } else if (type === "interest-only") {
        monthlyPayment = (numAmount * (numRate / 100)) / 12;
        totalInterest = monthlyPayment * n;
        totalPayment = numAmount + totalInterest;
      }

      return {
        ...state,
        monthlyPayment,
        totalInterest,
        totalPayment,
        errors: {
          amount: "",
          term: "",
          rate: "",
          type: "",
        },
      };
    }

    default:
      return state;
  }
}

export function useCalculator() {
  const [state, dispatch] = useReducer(calculatorReducer, initialState);

  const updateField = (field, value) =>
    dispatch({ type: "UPDATE_FIELD", field, value });

  const updateType = (value) => dispatch({ type: "UPDATE_TYPE", value });
  const clearForm = () => dispatch({ type: "CLEAR_FORM" });
  const calculate = () => dispatch({ type: "CALCULATE" });

  return {
    state,
    updateField,
    updateType,
    clearForm,
    calculate,
  };
}
