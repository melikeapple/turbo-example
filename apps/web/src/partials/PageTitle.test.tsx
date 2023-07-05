import React from "react";
import { render, screen } from "@testing-library/react";
import PageTitle from "./PageTitle";

const TEST_ID = "test-page-title";

const setup = (props?: any) =>
  render(
    <PageTitle data-testid={TEST_ID} {...props}>
      <div>Child</div>
    </PageTitle>
  );

describe("<PageTitle />", () => {
  it("Should render correctly", () => {
    setup();
    expect(screen.getByTestId(TEST_ID)).toBeInTheDocument();
  });
});
