import { render, screen } from '@testing-library/react';
import Header from '../Header';

it('Should render a same text passes into title props', async()=>{
    render(<Header title="My Header" />)
    const headingElement = screen.getByText(/my header/i);
    expect(headingElement).toBeInTheDocument();
});

//!Will always fail because there are two heading elements in the component and getByRole sends error when there are more than two.

// it('should render a heading passes into title props', async()=>{
//     render(<Header title="My Header" />)
//     const headingElement = screen.getByRole("heading");
//     expect(headingElement).toBeInTheDocument();
// });

// it('should render a heading passes into title props (prioritize: My Header)', async()=>{
//     render(<Header title="My Header" />)
//     const headingElement = screen.getByRole("heading", { name: "My Header" });
//     expect(headingElement).toBeInTheDocument();
// });

// it('should render a heading passes into title props and the element with the Title Header', async()=>{
//     render(<Header title="My Header" />)
//     const headingElement = screen.getByTitle("Header");
//     expect(headingElement).toBeInTheDocument();
// });

// it('should render a heading with test id of header-1', async()=>{
//     render(<Header title="My Header" />)
//     const headingElement = screen.getByTestId("header-1");
//     expect(headingElement).toBeInTheDocument();
// });

// it('Should render a same text passes into title props(getAllBy)', async()=>{
//     render(<Header title="My Header" />)
//     const headingElements = screen.getAllByRole("heading"); //Returns array of the heading elements 
//     expect(headingElements.length).toBe(2); //You expect two headings in the component
// });

// //Find By
// it('Should render a same text passes into title props(findby)', async()=>{
//     render(<Header title="My Header" />)
//     const headingElement = await screen.findByText(/my header/i); //Should be asynchronous and use it for asynchronous ones.
//     expect(headingElement).toBeInTheDocument();
// });

// //QueryBy
// it('Should render a same text passes into title props(queryBy)', async()=>{
//     render(<Header title="My Header" />)
//     const headingElement = screen.queryByText(/dogs/i); //When you don't want this to fail but return null
//     expect(headingElement).not.toBeInTheDocument(); //You don't want a element with text dog in the component
// });




