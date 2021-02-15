import React from 'react';
import { act } from "@testing-library/react";
import { renderHook } from '@testing-library/react-hooks';
import useComponentWillUnmount from './useComponentWillUnmount';

describe('useComponentWillUnmountHook', () => {
  const spyFunction = jest.fn();

  test ('should call callback on unmount', () => {
    const { unmount } = renderHook(() => useComponentWillUnmount(spyFunction));

    unmount();

    expect(spyFunction).toHaveBeenCalledTimes(1);

  });
})