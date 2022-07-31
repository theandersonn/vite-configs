import { render, screen } from '@testing-library/react';
import userEvent from "@testing-library/user-event";
import App from './App';

describe('Jest', () => {
  it('testing jet', () => {
    expect(1).toBe(1);
  });
});

describe('<App />', () => {
  it('should display elements', () => {
    render(<App />);
    expect(screen.getByRole('heading', { name: /vite \+ react/i })).toBeInTheDocument();
    expect(screen.getByRole('img', { name: /vite logo/i })).toBeInTheDocument();
    expect(screen.getByRole('img', { name: /react logo/i })).toBeInTheDocument();
  });

  it('should increment count on click', async () => {
    render(<App />);
    
    const counter = screen.getByRole('button', { name: /count is/i });
    expect(counter.textContent).toBe('count is 0');
    
    await userEvent.click(counter);
    expect(counter.textContent).toBe('count is 1');
  });
});