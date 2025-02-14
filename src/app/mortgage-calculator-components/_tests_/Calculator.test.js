import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Calculator from "../Calculator";

describe("Calculator", () => {
  test("Component renders major parts", () => {
    render(<Calculator />);

    const topLineCheck = screen.getByText("Mortgage Calculator");
    expect(topLineCheck).toBeInTheDocument();

    const mortgageAmountCheck = screen.getByText("Mortgage Amount");
    expect(mortgageAmountCheck).toBeInTheDocument();

    const TermAndRatesCheck = screen.getByText("Mortgage Term");
    expect(TermAndRatesCheck).toBeInTheDocument();

    const mortgageTypeCheck = screen.getByText("Mortgage Type");
    expect(mortgageTypeCheck).toBeInTheDocument();

    const buttonCheck = screen.getByText("Calculate Repayment");
    expect(buttonCheck).toBeInTheDocument();
  });

  test("Check that empty results container will be displayed", () => {
    render(<Calculator />);

    const resultsContainer = screen.getByTestId("results-container");
    expect(resultsContainer).toHaveClass(
      "flex h-1/3 w-full flex-col items-center justify-center bg-neutral-slate-900 p-2 md:h-full md:w-1/2 md:rounded-bl-[3.5rem] md:rounded-br-3xl md:rounded-tr-3xl md:p-8 lg:p-10",
    );

    const resultEmptyCheck = screen.getByText("Results shown here");
    expect(resultEmptyCheck).toBeInTheDocument;
  });

  test("renders YourResults when result.monthlyPayment is a valid number", () => {
    render(<Calculator />);

    const amountInput = screen.getByLabelText("$");
    const termInput = screen.getByLabelText("Years");
    const rateInput = screen.getByLabelText("%");
    const repaymentRadio = screen.getByTestId("repayment-radio");

    fireEvent.change(amountInput, { target: { value: "200000" } });
    fireEvent.change(termInput, { target: { value: "30" } });
    fireEvent.change(rateInput, { target: { value: "3.5" } });
    fireEvent.click(repaymentRadio);

    const calcButton = screen.getByRole("button", { name: /calculate/i });
    fireEvent.click(calcButton);

    const resultsText = screen.getByText("Your monthly repayments");
    expect(resultsText).toBeInTheDocument();
  });
});
