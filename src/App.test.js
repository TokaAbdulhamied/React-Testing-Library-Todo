import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";
import { MemoryRouter } from "react-router-dom";

describe("App Routes", () => {
  it("should go to `followers` page when click `followers` button", async () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );
    const followersElement = screen.getByText("Followers");
    fireEvent.click(followersElement);
    const header = screen.getByTestId("followers-header");
    expect(header).toBeInTheDocument();
  });
  it("should go to `/` page when click `Go Back` button", () => {
    render(
      <MemoryRouter initialEntries={["/followers"]}>
        <App />
      </MemoryRouter>
    );
    const goBackElement = screen.getByText("Go Back");
    fireEvent.click(goBackElement);
    const header = screen.getByTestId("todo-header");
    expect(header).toBeInTheDocument();
  });
});
