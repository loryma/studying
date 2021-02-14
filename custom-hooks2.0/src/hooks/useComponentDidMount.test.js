import React from 'react';
import { renderHook } from '@testing-library/react-hooks';

describe('useComponentDidMounHook', () => {
  const spyFunction = jest.fn();

  test ('should callback on mount', () => {
    const { rerender } = renderHook(() => renderHook(spyFunction));

    expect(spyFunction).toHaveBeenCalledTimes(1);

    rerender();

    expect(spyFunction).toHaveBeenCalledTimes(2);

  })
})