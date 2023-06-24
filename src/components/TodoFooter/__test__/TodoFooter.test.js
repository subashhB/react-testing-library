import { render, screen } from "@testing-library/react";
import TodoFooter from "../TodoFooter";

import { BrowserRouter } from "react-router-dom";

const MockTodoFooter = ({numberOfIncompleteTasks})=>{
    return(
        <BrowserRouter>
            <TodoFooter numberOfIncompleteTasks={numberOfIncompleteTasks} />
        </BrowserRouter>
    )
}
describe("ToDoFooter", ()=>{
    it("should render the correct amount of incomplete tasks",async()=>{
        // ! Testing <TodoFooter/> component in isolation would not work because <Link> is being used inside the components and it will not work without <BrowserRouter> which is inside <App/> component.
        // render(<TodoFooter numberOfIncompleteTasks={5} />); 
        render(<MockTodoFooter numberOfIncompleteTasks={5} />);
        const paragraphElement = screen.getByText(/5 tasks left/i);
        expect(paragraphElement).toBeInTheDocument();
    });
    
    it("should render 'task' when there is only one incomplete task left",async()=>{
        render(<MockTodoFooter numberOfIncompleteTasks={1} />);
        const paragraphElement = screen.getByText(/1 task left/i);
        expect(paragraphElement).toBeInTheDocument();
    });  
})

