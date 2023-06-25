import { fireEvent, render, screen } from "@testing-library/react";
import Todo from "../Todo";
import { BrowserRouter } from "react-router-dom";

const MockTodo = () => {
  return (
    <BrowserRouter>
      <Todo />
    </BrowserRouter>
  );
};

const addTask = (tasks) =>{
    const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);
    const buttonElement = screen.getByRole("button", { name: "Add" });
    tasks.forEach(task => {
       fireEvent.change(inputElement, { target: { value: task } });
       fireEvent.click(buttonElement); 
    });
}

describe("Todo", () => {
  it("should render a Task", async () => {
    render(<MockTodo />);
    addTask(["Test Task"]);
    const divElement = screen.getByText(/Test Task/i);
    expect(divElement).toBeInTheDocument();
  });

  it("should render multiple Tasks that is added", async () => {
    render(<MockTodo />);
    addTask(["Test Task 1", "Test Task 2","Test Task 3"])
    const divElement = screen.getAllByTestId("task-container");
    expect(divElement.length).toBe(3);
  });

  it("should not allow a task to have 'completed' class when initially rendered", async () => {
    render(<MockTodo />);
    addTask(["Test Task"]);
    const divElement = screen.getByText(/Test Task/i);
    expect(divElement).not.toHaveClass("todo-item-active");
  });

  it("should have 'completed' class when a task is clicked", async () => {
    render(<MockTodo />);
    addTask(["Test Task"]);
    const divElement = screen.getByText(/Test Task/i);
    fireEvent.click(divElement);
    expect(divElement).toHaveClass("todo-item-active");
  });
});
