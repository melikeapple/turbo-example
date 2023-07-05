import React from "react";
import { render, screen } from "@testing-library/react";
import Loader from "./Loader";

const TEST_ID = "test-loader";

const setup = (props?: any) =>
  render(<Loader data-testid={TEST_ID} {...props} />);

describe("<Loader />", () => {
  it("Should render correctly", () => {
    setup();
    expect(screen.getByTestId(TEST_ID)).toBeInTheDocument();
  });
});
