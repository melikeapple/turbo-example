import React from "react";
import { render, screen } from "@testing-library/react";
import Layout from "./Layout";

const TEST_ID = "test-layout";

const setup = (props?: any) =>
  render(
    <Layout data-testid={TEST_ID} {...props}>
      <div>Child</div>
    </Layout>
  );

describe("<Layout />", () => {
  it("Should render correctly", () => {
    setup();
    expect(screen.getByTestId(TEST_ID)).toBeInTheDocument();
  });
});
