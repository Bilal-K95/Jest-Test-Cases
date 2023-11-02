import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import Counter from "./Counter";

describe("Keyboard Interactions", () => {
  test("render count of one after clicking button", async () => {
    render(<Counter />);
    let countElement = screen.getByRole("button", { name: "Increament" });
    expect(countElement).toBeInTheDocument();
  });
});
