import { render, screen } from '@testing-library/react';
import App from './App';

describe("App", () => {
  it ("renders App component", async () => {
    render(<App />);
    // expect(screen.queryByText(/Searches for React/)).toBeNull();
    expect(screen.queryByText(/Logged in as/i)).toBeNull();
    screen.debug();
    expect(await screen.findByText(/Logged in as/i)).toBeInTheDocument();
    screen.debug();
  })
})