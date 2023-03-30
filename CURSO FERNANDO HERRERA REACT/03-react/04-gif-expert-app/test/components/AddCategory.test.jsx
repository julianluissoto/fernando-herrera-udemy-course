import { fireEvent, render, screen } from "@testing-library/react";
import AddCategory from "../../src/Components/AddCategory";

describe("Test on AddCategory component", () => {
  test("should change text box value ", () => {
    render(<AddCategory onNewCategory={() => {}} />); //create test subjet

    const input = screen.getByRole("textbox"); //extract input tag
    fireEvent.input(input, { target: { value: "goku" } }); //fire the event
    //screen.debug();

    expect(input.value).toBe("goku"); // check that the event ocurred
  });

  test("should call onNew category if the input has a value ", () => {
    const inputValue = "goku";
    const onNewCategory = jest.fn();

    render(<AddCategory onNewCategory={onNewCategory} />);

    const input = screen.getByRole("textbox");
    const form = screen.getByRole("form");

    fireEvent.input(input, { target: { value: inputValue } });
    fireEvent.submit(form);
    //screen.debug();

    expect(onNewCategory).toHaveBeenCalled();
    expect(onNewCategory).toHaveBeenCalledTimes(1);
    expect(onNewCategory).toHaveBeenLastCalledWith(inputValue);
  });

  test("must not call onNewCategory wuth empty input", () => {
    const onNewCategory = jest.fn();

    render(<AddCategory onNewCategory={onNewCategory} />);

    const form = screen.getByRole("form");

    fireEvent.submit(form);

    expect(onNewCategory).toHaveBeenCalledTimes(0); // equal to the one below
  });
});
