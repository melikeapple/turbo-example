import React from "react";
import { render, screen } from "@testing-library/react";
import DataTable from "./DataTable";

const setup = (props?: any) =>
  render(<DataTable data={[]} columns={[]} {...props} />);

describe("<Card />", () => {
  it("Should render correctly", () => {
    setup();
    expect(screen.getByRole("table")).toBeInTheDocument();
  });
});
