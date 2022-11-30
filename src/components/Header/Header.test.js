import { render, screen } from "@testing-library/react";
import Header from "./Header";

it("renders same text in Header passed to title props", () => {
  render(<Header title="todo" />);
  const HeaderElement = screen.getByText(/todo/i);
  expect(HeaderElement).toBeInTheDocument();
});
