import { render, screen } from "@testing-library/react";
import Skill from "./Skill";

describe("skill test", () => {
  let skills = ["HTML", "CSS", "JS"];
  render(<Skill skills={skills} />);
  test("render correctly", () => {
    let listElement = screen.getByRole("list");
    expect(listElement).toBeInTheDocument();
  });

  test("render list item ", () => {
    render(<Skill skills={skills} />);
    let listItemElement = screen.getAllByRole("listitem");
    expect(listItemElement).toHaveLength(3);
  });
});
