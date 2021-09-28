import { render, screen } from "@testing-library/react";
import App from "./App";

describe("basic UI tests", () => {
  it("renders text 'Counter'", () => {
    render(<App />);
    const text = screen.getByText(/Counter/);
    expect(text).toBeInTheDocument();
  });
  it("renders text 'Total'", () => {
    render(<App />);
    const text = screen.getByText(/Total/);
    expect(text).toBeInTheDocument();
  });

  it("renders text 'New counter:'", () => {
    render(<App />);
    const text = screen.getByText(/New counter:/i);
    expect(text).toBeInTheDocument();
  });

  it("renders button 'Add'", () => {
    render(<App />);
    const button = screen.getByText(/Add/);
    expect(button).toHaveAttribute("type", "button");
  });
});
