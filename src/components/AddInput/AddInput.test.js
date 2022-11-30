import { fireEvent, render, screen } from "@testing-library/react";
import { Button } from "bootstrap";
import AddInput from "./AddInput";

/*AddInput Test Stories 
    - should render input element.
    - should change the input value when type something. 
    - should have empty input when click add button. 

*/
const AddInputMoch = jest.fn();

describe("AddInput", () => {
  it("should render input element", () => {
    render(<AddInput todos={[]} setTodos={AddInputMoch} />);
    const InputElement = screen.getByPlaceholderText(/Add a new task here.../i);
    expect(InputElement).toBeInTheDocument();
  });

  it("hould change the input value when type something", () => {
    render(<AddInput todos={[]} setTodos={AddInputMoch} />);
    const InputElement = screen.getByPlaceholderText(/Add a new task here.../i);
    const inputValue = "Task one";
    fireEvent.change(InputElement, { target: { value: inputValue } });
    expect(InputElement.value).toBe(inputValue);
  });

  it("should have empty input when click add button", () => {
    render(<AddInput todos={[]} setTodos={AddInputMoch} />);
    const InputElement = screen.getByPlaceholderText(/Add a new task here.../i);
    const ButtonElement = screen.getByRole("button", { name: "Add" });
    const inputValue = "Task one";
    fireEvent.change(InputElement, { target: { value: inputValue } });
    console.log("InputElement", InputElement.value);
    fireEvent.click(ButtonElement);
    console.log("InputElement", InputElement.value);
    expect(InputElement.value).toBe("");
  });
});
