import { render, screen } from "@testing-library/react";
import Application from "./Application";

describe("Application test", () => {
  test("test getByRole", () => {
    render(<Application />);
    let nameElement = screen.getByRole("textbox", { name: "name" });
    expect(nameElement).toBeInTheDocument();

    let jobLocationElement = screen.getByRole("combobox");
    expect(jobLocationElement).toBeInTheDocument();

    let termsElement = screen.getByRole("checkbox");
    expect(termsElement).toBeInTheDocument();

    let submitElement = screen.getByRole("button");
    expect(submitElement).toBeInTheDocument();

    let headerElement = screen.getByRole("heading", {
      level: 1,
    });

    expect(headerElement).toBeInTheDocument();
    let sectionElement = screen.getByRole("heading", {
      level: 2,
      //   name: "fir",
    });
    expect(sectionElement).toBeInTheDocument();

    // getByLabel

    let nameElementForLabel = screen.getByLabelText("name");
    expect(nameElementForLabel).toBeInTheDocument();

    // getByPlaceHolder

    let fullNameElementByPlaceHolder = screen.getByPlaceholderText("fullName");
    expect(fullNameElementByPlaceHolder).toBeInTheDocument();

    //getByText

    let paragraphElementBytext = screen.getByText("All fiels are mendatory");
    expect(paragraphElementBytext).toBeInTheDocument();

    //getByValue

    let inputGetByValue = screen.getByDisplayValue("samir");
    expect(inputGetByValue).toBeInTheDocument();

    // getByaltText
    let inputGetByalText = screen.getByAltText("profileImage");
    expect(inputGetByalText).toBeInTheDocument();

    //getByTitle

    let spanGetByTitle = screen.getByTitle("close");
    expect(spanGetByTitle).toBeInTheDocument();

    //getBytestId

    let divGetByTestId = screen.getByTestId("custom-element");
    expect(divGetByTestId).toBeInTheDocument();
  });
});
