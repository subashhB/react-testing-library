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

//!This isn't a good practice because 1)it requires API requests which costs money 2)Requests are slow 3)Test are now dependent on something external (We just want to test our react frontend)
// TODO You should test the API in complete isolation and App in complete isolation
//TODO Mock the data that API gives us
//TODO: Mock the axios function
describe("FollowersList", () => {
    beforeEach(()=>{
        console.log("Running before each tests in FollowersList");
    })
    beforeAll(()=>{
        console.log("Running once before all the tests for FollowersList");
    })
    afterEach(()=>{
        console.log("Running after each tests in FollowersList");
    })
    afterAll(()=>{
        console.log("Running once after all the tests for FollowersList");
    })
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
