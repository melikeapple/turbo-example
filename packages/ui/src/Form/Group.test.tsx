import React from "react";
import { render, screen } from "@testing-library/react";
import Group, { DEFAULT_CLASS } from "./Group";

const TEST_ID = "test-group";

const setup = (props?: any) =>
  render(
    <Group data-testid={TEST_ID} {...props}>
      <div>Child</div>
    </Group>
  );

describe("<Group />", () => {
  it("Should render correctly", () => {
    setup();
    expect(screen.getByTestId(TEST_ID)).toBeInTheDocument();
  });

  it("Should have default class", () => {
    setup();
    expect(screen.getByTestId(TEST_ID)).toHaveClass(DEFAULT_CLASS);
  });

  it("Should properly add required element as a child", () => {
    const isInvalid = "This field is required";
    setup({ isInvalid });
    const parent = screen.getByTestId(TEST_ID);
    const child = screen.getByText(isInvalid);
    expect(parent).toContainElement(child);
  });
});
