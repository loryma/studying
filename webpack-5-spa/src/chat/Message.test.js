import React from "react";
import { render, screen } from "@testing-library/react";
import Message from "./Message.js";

describe("renders message component", () => {
  test ("renders message text", () => {
    const messageText = "message";
    render(<Message content={messageText} />);
    const message = screen.getByText(/message/i);
    expect(message).toBeInTheDocument();
  });
});
