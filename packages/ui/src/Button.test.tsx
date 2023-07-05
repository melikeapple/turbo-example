import React from "react";
import { render, screen } from "@testing-library/react";
import Button, {
  VARIANT,
  DEFAULT_VARIANT,
  DEFAULT_CLASS,
  SIZE,
  DEFAULT_SIZE,
} from "./Button";

const TEST_ID = "test-button";
const ELEMENT_DEFAULT_CLASS = `${DEFAULT_CLASS} ${VARIANT[DEFAULT_VARIANT]} ${SIZE[DEFAULT_SIZE]}`;

const setup = (props?: any) =>
  render(
    <Button data-testid={TEST_ID} {...props}>
      Button
    </Button>
  );

describe("<Button />", () => {
  it("Should render correctly", () => {
    setup();
    expect(screen.getByTestId(TEST_ID)).toBeInTheDocument();
  });

  it("Should have default class", () => {
    setup();
    expect(screen.getByTestId(TEST_ID)).toHaveClass(ELEMENT_DEFAULT_CLASS);
  });

  it("Should have block class", () => {
    setup({ block: true });
    expect(screen.getByTestId(TEST_ID)).toHaveClass("w-full");
  });
});
