import React from "react";
import { render, screen } from "@testing-library/react";
import Label, { SIZE, DEFAULT_SIZE, DEFAULT_CLASS } from "./Label";

const TEST_ID = "test-label";

const setup = (props?: any) =>
  render(
    <Label data-testid={TEST_ID} {...props}>
      Test
    </Label>
  );

describe("<Label />", () => {
  const testid = "test-label";

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

  it('Should default to size="md"', () => {
    setup();
    expect(screen.getByTestId(TEST_ID)).toHaveClass(SIZE[DEFAULT_SIZE]);
  });

  it("Should properly block itself", () => {
    setup({ block: true });
    expect(screen.getByTestId(TEST_ID)).toHaveClass("w-full");
  });

  it("Should properly add required element as a child", () => {
    setup({ required: true });
    const parent = screen.getByTestId(TEST_ID);
    const child = screen.getByText("*");
    expect(parent).toContainElement(child);
  });
});
