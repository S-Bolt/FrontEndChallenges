import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Home from "../page";

describe("Home", () => {
  test("renders both challanges with correct titles", () => {
    render(<Home />);

    const challenge1Title = screen.getByText("Challenge 1");
    const challenge2Title = screen.getByText("Challenge 2");

    expect(challenge1Title).toBeInTheDocument();
    expect(challenge2Title).toBeInTheDocument();
  });

  test("mini-project components are being rendered", () => {
    render(<Home />);

    const qrCodeImage = screen.getByAltText("QR CODE");
    expect(qrCodeImage).toBeInTheDocument();

    const calcLabel = screen.getByText("Mortgage Amount");
    expect(calcLabel).toBeInTheDocument();
  });
});
