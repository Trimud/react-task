import { render, screen } from "@testing-library/react";
import CounterTotal from "./CounterTotal";

describe("basic UI tests", () => {
  it("renders text 'Total'", () => {
    render(<CounterTotal total="12345" />);
    const text = screen.getByText(/12345/);
    expect(text).toBeInTheDocument();
  });
});
