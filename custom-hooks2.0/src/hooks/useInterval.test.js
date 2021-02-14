import React from 'react';
import { renderHook } from '@testing-library/react-hooks';
import useInterval from './useInterval';

beforeEach(() => {
  jest.useFakeTimers();
});

afterEach(() => {
  jest.clearAllTimers();
});

describe('useInterval hook', () => {
  const spyFunction = jest.fn();

  test ('should call callback after time delay', () => {
    renderHook(() => useInterval(spyFunction, 1000));

    expect(spyFunction).not.toHaveBeenCalled();

    jest.advanceTimersByTime(1000);

    expect(spyFunction).toHaveBeenCalledTimes(1);

  });
})