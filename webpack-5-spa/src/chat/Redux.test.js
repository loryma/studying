import React from "react";
import { render, screen, act } from "@testing-library/react";
import { createStore } from "redux";
import { Provider } from 'react-redux';
import Chat from './Chat';

import reducer from '../redux';
import userEvent from "@testing-library/user-event";

const renderWithRedux = (
    component, 
    { initialState, store = createStore(reducer, initialState) } = {}
) => {
    return {
        ...render(<Provider store={store}>{component}</Provider>),
        store
    }
};

describe('Redux testing', () => {
  it('check initial state is equal to chatId AnN7n46VFz5AyNHhqsGg', () => {
    const { getByRole } = renderWithRedux(<Chat />);
    expect (getByRole('heading')).toHaveTextContent('AnN7n46VFz5AyNHhqsGg');
  });

  it('changes chat id through redux', () => {
    renderWithRedux(<Chat />, {
      initialState: {chatId: 'AnN7n46VFz5AyNHhqsGg'}
    })
    userEvent.click(screen.getByText('JduiAwhUtLfRulMMuNEL'));
    expect(screen.getByRole('heading')).toHaveTextContent('JduiAwhUtLfRulMMuNEL');
  })
});