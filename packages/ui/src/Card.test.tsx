import React from "react";
import { render, screen } from "@testing-library/react";
import Card, {
  VARIANT,
  DEFAULT_VARIANT,
  DEFAULT_CLASS,
  ROUNDED,
  DEFAULT_ROUNDED,
} from "./Card";

const TEST_ID = "test-card";
const ELEMENT_DEFAULT_CLASS = `${DEFAULT_CLASS} ${VARIANT[DEFAULT_VARIANT]} ${ROUNDED[DEFAULT_ROUNDED]}`;

const setup = (props?: any) =>
  render(<Card data-testid={TEST_ID} {...props} />);

describe("<Card />", () => {
  it("Should render correctly", () => {
    setup();
    expect(screen.getByTestId(TEST_ID)).toBeInTheDocument();
  });

  it("Should have default class", () => {
    setup();
    expect(screen.getByTestId(TEST_ID)).toHaveClass(ELEMENT_DEFAULT_CLASS);
  });
});
