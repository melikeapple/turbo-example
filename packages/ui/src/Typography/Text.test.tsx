import React from "react";
import { render, screen } from "@testing-library/react";
import Text, { DEFAULT_CLASS } from "./Text";

const TEST_ID = "test-typography-text";

const setup = (props?: any) =>
  render(
    <Text data-testid={TEST_ID} {...props}>
      Child
    </Text>
  );

describe("<Text />", () => {
  it("Should render correctly", () => {
    setup();
    expect(screen.getByTestId(TEST_ID)).toBeInTheDocument();
  });

  it("Should have default class", () => {
    setup();
    expect(screen.getByTestId(TEST_ID)).toHaveClass(DEFAULT_CLASS);
  });
});
