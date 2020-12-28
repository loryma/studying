import React from "react";
import { act, findByText, render, screen } from "@testing-library/react";
import axios from "axios";
import Chat from "./Chat.js";
import userEvent from '@testing-library/user-event';

jest.mock("axios");

const messages = {documents: [{
  createTime: "2020-12-19T19:08:06.045587Z",
  fields: {
    author: {
      stringValue: "lvvSNZ609WCMjyOrQlC5"
    },

    content: {
      stringValue: "new text message"
    },

    createdAt: {
      timestampValue: "2020-12-19T19:08:05.850Z"
    },
    name: "projects/chat-fcdfb/databases/(default)/documents/chats/AnN7n46VFz5AyNHhqsGg/messages/6hzyAhwiOJyyJGfke8K8",
    updateTime: "2020-12-19T19:08:06.045587Z"
  }
}]};

describe("render chat", () => {
  test("has input field", () => {
    act(() => {
      render(<Chat />);
    });
    const inputElement = screen.getByRole('textbox');
    expect(inputElement).toBeInTheDocument();
  });

  test ("request to load list of messages on first render", async () => {
    axios.get.mockImplementation(() => Promise.resolve({data: messages}));
    act(() => {
      render(<Chat />);
    });
    expect(axios.get).toHaveBeenCalledTimes(1);
  });

  test ("list of message is loaded on first render", async () => {
    axios.get.mockImplementation(() => Promise.resolve({data: messages}));
    render(<Chat />);

    expect(screen.queryByText(/new text message/i)).toBeNull();
    expect(await screen.findByText(/new text message/i)).toBeInTheDocument();
  });

  // test ("new submitted message shows up in the list of message", async () => {
  //   render(<Chat />);
  //   userEvent.type(screen.getByRole("textbox"), "New message{enter}");
  //   expect(await screen.findByText(/New message/i)).toBeInTheDocument();
  // });
});