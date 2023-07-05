import React from "react";
import { render, screen } from "@testing-library/react";
import Header from "./Header";

const TEST_ID = "test-header";

const setup = (props?: any) =>
  render(
    <Header data-testid={TEST_ID} {...props}>
      <div>Child</div>
    </Header>
  );

describe("<Header />", () => {
  it("Should render correctly", () => {
    setup();
    expect(screen.getByTestId(TEST_ID)).toBeInTheDocument();
  });
});
