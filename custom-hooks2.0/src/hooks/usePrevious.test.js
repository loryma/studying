import { renderHook } from '@testing-library/react-hooks';
import usePrevious from './usePrevious';

describe('usePrevios hook', () => {
  test('should return previously passed value', () => {
    let value = 'one';
    const { result, rerender } = renderHook(() => usePrevious(value));

    value = 'two';
    rerender();

    expect(result.current).toBe('one');
  })
})