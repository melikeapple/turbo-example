import React from "react";
import { render, screen } from "@testing-library/react";
import ContentWrapper from "./ContentWrapper";

const TEST_ID = "test-content-wrapper";

const setup = (props?: any) =>
  render(
    <ContentWrapper data-testid={TEST_ID} {...props}>
      <div>Child</div>
    </ContentWrapper>
  );

describe("<ContentWrapper />", () => {
  it("Should render correctly", () => {
    setup();
    expect(screen.getByTestId(TEST_ID)).toBeInTheDocument();
  });
});
