import { render, screen } from "@testing-library/react";
import FollowersList from "../FollowersList";

import { BrowserRouter } from "react-router-dom";

const MockFollowersList = () => {
  return (
    <BrowserRouter>
      <FollowersList />
    </BrowserRouter>
  );
};

describe("FollowersList", () => {
  it("should render first follower card", async () => {
    render(<MockFollowersList />);
    const followerDivElement = await screen.findByTestId("follower-item-0"); //getByTestId does not work asynchronously
    expect(followerDivElement).toBeInTheDocument();
  });

  it("should render 5 follower card", async () => {
    render(<MockFollowersList />);
    const followerDivElements = await screen.findAllByTestId(/follower-item/i); //getByTestId does not work asynchronously
    expect(followerDivElements.length).toBe(5);
  });
});
