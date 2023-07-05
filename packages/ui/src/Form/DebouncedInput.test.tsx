import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import DebouncedInput from "./DebouncedInput";

const TEST_ID = "test-debounced-input";

const setup = (props?: any) =>
  render(
    <DebouncedInput
      value="deneme"
      onChange={() => null}
      data-testid={TEST_ID}
      {...props}
    />
  );

describe("<DebouncedInput />", () => {
  beforeEach(() => jest.resetModules());

  it("Should render correctly", () => {
    setup();
    expect(screen.getByTestId(TEST_ID)).toBeInTheDocument();
  });

  test("should allow letters to be inputted", () => {
    const value = "terry";
    setup();
    const element = screen.getByTestId(TEST_ID);
    fireEvent.change(element, { target: { value: value } });
    expect(element).toHaveValue(value);
  });

  test("should change debounce", () => {
    const value = "terry";
    setup({ debounce: 700 });
    const element = screen.getByTestId(TEST_ID);
    fireEvent.change(element, { target: { value: value } });
    expect(element).toHaveValue(value);
  });
});
