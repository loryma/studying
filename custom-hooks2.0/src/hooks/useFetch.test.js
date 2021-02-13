import React from 'react';
import { renderHook } from '@testing-library/react-hooks';
import useFetch from './useFetch';


function fetchMock(url, options) {
  return new Promise((resolve) =>
    setTimeout(() => {
      resolve({
        json: () =>
          Promise.resolve(url),
      });
    }, 200 + Math.random() * 300)
  );
};

// runs before any tests start running
beforeAll(() => {
  global.fetch = jest.fn().mockImplementation(fetchMock);
});

// runs after all tests have finished
afterAll(() => {
  global.fetch.mockClear();
  delete global.fetch;
});

describe('useFetch hook', () => {
  test ('should fetch data from api', async () => {
    const { result, waitForNextUpdate } = renderHook(() => useFetch({url: 'http://example.com'}));
    await waitForNextUpdate();

    expect(result.current.response).toEqual('http://example.com');
  })
});

