import { render, screen } from "@testing-library/react";
import Hello from "./Hello";

test("test Hello word component", () => {
  render(<Hello />);
  let textElement = screen.getByText("Hello");
  expect(textElement).toBeInTheDocument();
});

describe("Hello componnent test", () => {
  test("hello bilal text", () => {
    render(<Hello name="Bilal" />);
    let textElement = screen.getByText("Hello Bilal");
    expect(textElement).toBeInTheDocument();
  });
});
