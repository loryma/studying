import React from "react";
import { render, screen } from "@testing-library/react";
import Chat from "./Chat.js";
import userEvent from '@testing-library/user-event'

describe("render chat", () => {
  test("has input field", () => {
    render (<Chat />);
    const inputElement = screen.getByRole('textbox');
    expect(inputElement).toBeInTheDocument();
  });

  test ("new submitted message shows up in the list of message", async () => {
    render(<Chat />);
    userEvent.type(screen.getByRole("textbox"), "New message{enter}");
    expect(await screen.findByText(/New message/i)).toBeInTheDocument();
  });
});