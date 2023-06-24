import { fireEvent, render, screen } from "@testing-library/react";
import AddInput from "../AddInput";

const mockedSetTodos = jest.fn()

describe("AddInput", ()=>{
    it("should render input", async()=>{
        render(<AddInput todos={[]} setTodos={ mockedSetTodos } />);
        const inputElement = screen.getByPlaceholderText(/Add a new task here.../i); //Placeholder of the input field
        expect(inputElement).toBeInTheDocument();
    })

    it("should be able to type into this input", async()=>{
        render(<AddInput todos={[]} setTodos={ mockedSetTodos } />);
        const inputElement = screen.getByPlaceholderText(/Add a new task here.../i); //Placeholder of the input field
        fireEvent.change(inputElement, { target: { value: "Testing Value" } }); //This is an event handler
        expect(inputElement.value).toBe("Testing Value");
    })

    it("should have empty input when add button is clicked", async()=>{
        render(<AddInput todos={[]} setTodos={ mockedSetTodos } />);
        const inputElement = screen.getByPlaceholderText(/Add a new task here.../i); //Placeholder of the input field
        const buttonElement = screen.getByRole("button", { name: /Add/i });
        fireEvent.click(buttonElement); //This is an event handler
        expect(inputElement.value).toBe("");
    })
})