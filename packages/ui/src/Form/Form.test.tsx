import React from "react";
import { render, screen } from "@testing-library/react";
import Form from "./index";

const TEST_ID = "test-form";

const setup = (props?: any) =>
  render(
    <Form data-testid={TEST_ID} {...props}>
      <div>Child</div>
    </Form>
  );

describe("<Form />", () => {
  it("Should render correctly", () => {
    setup();
    expect(screen.getByTestId(TEST_ID)).toBeInTheDocument();
  });
});
