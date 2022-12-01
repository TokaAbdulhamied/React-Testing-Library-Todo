import { BrowserRouter } from "react-router-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import Todo from "./Todo";

/*Todo Test Stories (itegration of AddInput and TodoList)
    - when add task todo dev should be rendered
    - lenght of added tasks should be the length of todoList 
    - task should not have completed class when initially rendered 
    - task should have completed class when clicked

*/
const TodoMock = () => (
  <BrowserRouter>
    <Todo />
  </BrowserRouter>
);
const addTasks = (tasks) => {
  const InputElement = screen.getByPlaceholderText(/Add a new task here.../i);
  const ButtonElement = screen.getByRole("button", { name: "Add" });
  tasks.forEach((task) => {
    fireEvent.change(InputElement, { target: { value: task } });
    fireEvent.click(ButtonElement);
  });
  return tasks.length;
};
describe("Todo", () => {
  it("should render TodoDev", () => {
    render(<TodoMock />);
    const inputValue = "New Task";
    addTasks([inputValue]);
    const TaskDiv = screen.getByText(inputValue);
    expect(TaskDiv).toBeInTheDocument();
  });

  it("length of todoList should be lenght of added tasks", () => {
    render(<TodoMock />);
    const tasks = ["Task one", "Task two", "Task Tree"];
    const tasksNum = addTasks(tasks);
    const TaskElemetns = screen.getAllByTestId("todo-content");
    console.log(TaskElemetns);
    expect(TaskElemetns.length).toBe(tasksNum);
  });

  it("task should not have completed class when initially rendered", () => {
    render(<TodoMock />);
    const inputValue = "New Task";
    addTasks([inputValue]);
    const TaskDiv = screen.getByText(inputValue);
    expect(TaskDiv.className.includes("todo-item-active")).toBeFalsy;
    expect(TaskDiv).not.toHaveClass("todo-item-active"); // better way
  });
  it("task should have completed class when clicked", () => {
    render(<TodoMock />);
    const inputValue = "New Task";
    addTasks([inputValue]);
    const TaskDiv = screen.getByText(inputValue);
    fireEvent.click(TaskDiv);
    expect(TaskDiv).toHaveClass("todo-item-active"); // better way
  });
});
