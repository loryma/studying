import React from 'react';
import { renderHook } from '@testing-library/react-hooks';
import useTimeout from './useTimeout';
import callback from '../components/callbackClick';

beforeEach(() => {
  jest.useFakeTimers();
});

afterEach(() => {
  jest.clearAllTimers();
});

describe('useTimout hook', () => {
  test ('should return new value after timeout', () => {
    renderHook(() => useTimeout(callback, 1000));

    expect(callback).not.toBeCalled();

    jest.runAllTimers();

    expect(callback).toHaveBeenCalledTimes(1);
  });
});