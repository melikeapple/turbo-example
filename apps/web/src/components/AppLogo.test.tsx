import React from "react";
import { render, screen } from "@testing-library/react";
import AppLogo from "./AppLogo";

const TEST_ID = "test-app-logo";

const setup = (props?: any) =>
  render(<AppLogo data-testid={TEST_ID} {...props} />);

describe("<AppLogo />", () => {
  it("Should render correctly", () => {
    setup();
    expect(screen.getByTestId(TEST_ID)).toBeInTheDocument();
  });
});
