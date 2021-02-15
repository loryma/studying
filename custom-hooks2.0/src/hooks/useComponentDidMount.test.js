import React from 'react';
import { act } from "@testing-library/react";
import { renderHook } from '@testing-library/react-hooks';
import useComponentDidMount from './useComponentDidMount';

describe('useComponentDidMounHook', () => {
  const spyFunction = jest.fn();

  test ('should callback callback on mount', () => {
    renderHook(() => useComponentDidMount(spyFunction));

    expect(spyFunction).toHaveBeenCalledTimes(1);

    renderHook(() => useComponentDidMount(spyFunction));

    expect(spyFunction).toHaveBeenCalledTimes(2);

  });

  test ('should call callback only on mount and not on next renders', () => {
    const { rerender } = renderHook(() => useComponentDidMount(spyFunction));

    expect(spyFunction).toHaveBeenCalledTimes(1);

    rerender();

    expect(spyFunction).toHaveBeenCalledTimes(1);

  });
})