import React from "react";
import { render, screen } from "@testing-library/react";
import Content from "./Content";

const TEST_ID = "test-content";

const setup = (props?: any) =>
  render(
    <Content data-testid={TEST_ID} {...props}>
      <div>Child</div>
    </Content>
  );

describe("<Content />", () => {
  it("Should render correctly", () => {
    setup();
    expect(screen.getByTestId(TEST_ID)).toBeInTheDocument();
  });
});
