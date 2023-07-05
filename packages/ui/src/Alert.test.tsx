import React from "react";
import { render, screen } from "@testing-library/react";
import Alert, { VARIANT, DEFAULT_VARIANT, DEFAULT_CLASS } from "./Alert";

const TEST_ID = "test-alert";
const ELEMENT_DEFAULT_CLASS = `${DEFAULT_CLASS} ${VARIANT[DEFAULT_VARIANT]}`;

const setup = (props?: any) =>
  render(
    <Alert data-testid={TEST_ID} {...props}>
      <div>Child</div>
    </Alert>
  );

describe("<Alert />", () => {
  it("Should render correctly", () => {
    setup();
    expect(screen.getByTestId(TEST_ID)).toBeInTheDocument();
  });

  it("Should have default class", () => {
    setup();
    expect(screen.getByTestId(TEST_ID)).toHaveClass(ELEMENT_DEFAULT_CLASS);
  });

  it('Should default to variant="danger"', () => {
    setup({ variant: "danger" });
    expect(screen.getByTestId(TEST_ID)).toHaveClass(VARIANT["danger"]);
  });
});
