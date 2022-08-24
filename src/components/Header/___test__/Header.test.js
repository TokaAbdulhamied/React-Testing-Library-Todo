import { render, screen } from "@testing-library/react";
import Header from "../Header";

it("renders same text in Header passed to title props", () => {
  render(<Header title="Unit Test" />);
  const HeaderElement = screen.getByText(/Unit Test/i);
  expect(HeaderElement).toBeInTheDocument();
});

it("renders same text in Header passed to title props", () => {
  render(<Header title="Unit Test" />);
  // XX fails as there are more than one heading
  const HeaderElement = screen.getByRole("heading");
  expect(HeaderElement).toBeInTheDocument();
});

it("renders same text in Header passed to title props", () => {
  render(<Header title="Unit Test" />);
  // looking for heading with spacific text
  const HeaderElement = screen.getByRole("heading", { name: "Unit Test" });
  expect(HeaderElement).toBeInTheDocument();
});

it("renders same text in Header passed to title props", () => {
  render(<Header title="Unit Test" />);
  const HeaderElement = screen.getByTestId("header-1");
  expect(HeaderElement).toBeInTheDocument();
});

it("renders same text in Header passed to title props", async () => {
  render(<Header title="Unit Test" />);
  const HeaderElement = await screen.findByText(/Unit Test/i);
  expect(HeaderElement).toBeInTheDocument();
});

it("renders same text in Header passed to title props", () => {
  render(<Header title="Unit Test" />);
  const HeaderElement = screen.queryByText(/Toka/i);
  expect(HeaderElement).not.toBeInTheDocument();
});

it("renders same text in Header passed to title props", () => {
  render(<Header title="Unit Test" />);
  const HeaderElements = screen.getAllByRole("heading");
  expect(HeaderElements.length).toBe(2);
});
