import React from 'react';
import { render, screen, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ClickOutsideComponent from '../components/ClickOutsideComponent';
import callback from '../components/callbackClick';

describe('useClickOutside hook', () => {

  test('should call passed callback if clicked outside of element', () => {

    render (<ClickOutsideComponent />);

    const div = screen.getByText(/I and my children have click listener/);
    
    userEvent.click(div.parentElement);

    expect(callback).toHaveBeenCalledTimes(1);

  });

  test('should not call passed callback if element itself is clicked', () => {

    render (<ClickOutsideComponent />);

    const div = screen.getByText(/I and my children have click listener/);
    
    userEvent.click(div);

    expect(callback).toHaveBeenCalledTimes(0);

  });

  test('should not call passed callback if child element is clicked', () => {

    render (<ClickOutsideComponent />);

    const childDiv = screen.getByText(/I am a child and my parent has click listener/);
    
    userEvent.click(childDiv);

    expect(callback).toHaveBeenCalledTimes(0);

  });
});