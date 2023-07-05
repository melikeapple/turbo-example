import React from "react";
import { render, screen } from "@testing-library/react";
import Input, {
  VARIANT,
  DEFAULT_VARIANT,
  SIZE,
  DEFAULT_SIZE,
  INVALID_CLASS,
  DEFAULT_CLASS,
} from "./Input";

const TEST_ID = "test-input";

const setup = (props?: any) =>
  render(<Input data-testid={TEST_ID} {...props} />);

describe("<Input />", () => {
  it("Should render correctly", () => {
    setup();
    expect(screen.getByTestId(TEST_ID)).toBeInTheDocument();
  });

  it("Should have default class", () => {
    setup();
    expect(screen.getByTestId(TEST_ID)).toHaveClass(
      `${DEFAULT_CLASS} ${SIZE[DEFAULT_SIZE]}`
    );
  });

  it('Should default to variant="primary"', () => {
    setup();
    expect(screen.getByTestId(TEST_ID)).toHaveClass(VARIANT[DEFAULT_VARIANT]);
  });

  it('Should default to size="md"', () => {
    setup();
    expect(screen.getByTestId(TEST_ID)).toHaveClass(SIZE[DEFAULT_SIZE]);
  });

  it("Should have invalid class", () => {
    const isInvalid = "This field is required";
    setup({ isInvalid });
    expect(screen.getByTestId(TEST_ID)).toHaveClass(INVALID_CLASS);
  });
});
