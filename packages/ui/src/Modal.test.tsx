import React from "react";
import {
  render,
  screen,
  waitFor,
  act,
  fireEvent,
} from "@testing-library/react";
import Modal from "./Modal";

const TEST_ID = "test-modal";

describe("<Modal />", () => {
  it("Should render correctly & Should trigger onClose func", async () => {
    jest.resetAllMocks();
    const callbackFunc = jest.fn();
    render(
      <Modal
        data-testid={TEST_ID}
        isOpen={true}
        setIsOpen={callbackFunc}
        title={<div>Title</div>}
      >
        <div>Body</div>
      </Modal>
    );
    await waitFor(() => screen.getByTestId(TEST_ID));
    expect(screen.getByTestId(TEST_ID)).toBeInTheDocument();
    act(() => {
      fireEvent.keyDown(screen.getByTestId(TEST_ID), {
        key: "Escape",
        code: "Escape",
        keyCode: 27,
        charCode: 27,
      });
    });
    expect(callbackFunc).toHaveBeenCalled();
  });
});
