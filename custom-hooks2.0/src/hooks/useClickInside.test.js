import React from 'react';
import { render, screen, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ClickInsideComponent from '../components/ClickInsideComponent';
import callback from '../components/callbackInsideClick';

describe('useClickInside hook', () => {

  test('should call passed callback if clicked', () => {

    render (<ClickInsideComponent />);

    const div = screen.getByText(/I and my children have click listener/);
    
    userEvent.click(div);

    expect(callback).toHaveBeenCalledTimes(1);

  });

  test('should call passed callback if child is clicked', () => {

    render (<ClickInsideComponent />);

    const childDiv = screen.getByText(/I am a child and my parent has click listener/);
    
    userEvent.click(childDiv);

    expect(callback).toHaveBeenCalledTimes(1);

  });
});