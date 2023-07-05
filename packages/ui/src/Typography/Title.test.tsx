import React from "react";
import { render, screen } from "@testing-library/react";
import Title, { LEVEL_LIST, LEVELS } from "./Title";

const TEST_ID = "test-typography-title";

const setup = (props?: any) =>
  render(
    <Title data-testid={TEST_ID} {...props}>
      Child
    </Title>
  );

describe("<Title />", () => {
  it("Should render correctly", () => {
    setup();
    expect(screen.getByTestId(TEST_ID)).toBeInTheDocument();
  });

  it("Should have h1 tag by default", () => {
    setup();
    expect(screen.getByTestId(TEST_ID)).toHaveClass(LEVELS[LEVEL_LIST[0]]);
  });

  it("Should have h1 tag if level is not includes", () => {
    setup({ level: 6 });
    expect(screen.getByTestId(TEST_ID).tagName.toLowerCase()).toEqual("h1");
  });
});
