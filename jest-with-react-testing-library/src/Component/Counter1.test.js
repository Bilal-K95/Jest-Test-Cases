import { render, screen, waitFor } from "@testing-library/react";
import Counter1 from "./Counter1";
import userEvent from "@testing-library/user-event";

describe("Counter1", () => {
  test("render correctly", () => {
    render(<Counter1 />);

    let headElement = screen.getByRole("heading");
    expect(headElement).toBeInTheDocument();
    let countElement = screen.getByRole("button");
    expect(countElement).toBeInTheDocument();
  });

  test("renders a count of 0", () => {
    render(<Counter1 />);
    let headElement = screen.getByRole("heading");
    expect(headElement).toHaveTextContent("0");
  });

  test("render a count of 1 after clicking increament button", async () => {
    render(<Counter1 />);
    let increamentButton = screen.getByRole("button");
    await userEvent.click(increamentButton);
    const countElement = screen.getByRole("heading");
    expect(countElement).toHaveTextContent("1");
  });

  test("render count of 2 after clicking increament button twice", async () => {
    render(<Counter1 />);
    const increamentButton = screen.getByRole("button");
    await userEvent.dblClick(increamentButton);
    const countElement = screen.getByRole("heading");
    console.log("countElement", countElement.textContent);
    expect(countElement).toHaveTextContent("1");
  });
});
