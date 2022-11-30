import { BrowserRouter } from "react-router-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import Todo from "./Todo";

/*Todo Test Stories (itegration of AddInput and TodoList)
    - when input value change and add button clicked todo should be in doc with the input value  

*/
const TodoMock = () => (
  <BrowserRouter>
    <Todo />
  </BrowserRouter>
);

describe("Todo", () => {
  it("should render TodoDev", () => {
    render(<TodoMock />);
    const InputElement = screen.getByPlaceholderText(/Add a new task here.../i);
    const ButtonElement = screen.getByRole("button", { name: "Add" });
    const inputValue = "New Task";
    fireEvent.change(InputElement, { target: { value: inputValue } });
    fireEvent.click(ButtonElement);
    const TaskDiv = screen.getByText(inputValue);
    expect(InputElement.value).toBe("");
    expect(TaskDiv).toBeInTheDocument();
  });

  //   it("hould change the input value when type something", () => {
  //     render(<AddInput todos={[]} setTodos={AddInputMoch} />);
  //     const InputElement = screen.getByPlaceholderText(/Add a new task here.../i);
  //     const inputValue = "Task one";
  //     fireEvent.change(InputElement, { target: { value: inputValue } });
  //     expect(InputElement.value).toBe(inputValue);
  //   });

  //   it("should have empty input when click add button", () => {
  //     render(<AddInput todos={[]} setTodos={AddInputMoch} />);
  //     const InputElement = screen.getByPlaceholderText(/Add a new task here.../i);
  //     const ButtonElement = screen.getByRole("button", { name: "Add" });
  //     const inputValue = "Task one";
  //     fireEvent.change(InputElement, { target: { value: inputValue } });
  //     console.log("InputElement", InputElement.value);
  //     fireEvent.click(ButtonElement);
  //     console.log("InputElement", InputElement.value);
  //     expect(InputElement.value).toBe("");
  //   });
});
