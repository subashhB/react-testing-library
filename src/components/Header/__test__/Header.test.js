import { render, screen } from "@testing-library/react";
import Header from "../Header";

describe("Header", () => {
  it("Should render a same text passes into title props", async () => {
    render(<Header title="My Header" />);
    const headingElement = screen.getByText(/my header/i);
    expect(headingElement).toBeInTheDocument();
  });
});
