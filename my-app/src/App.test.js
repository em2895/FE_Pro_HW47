import { render, screen } from '@testing-library/react';
import App from './App';

test('Title renders successfully', () => {
    render(<App />);
    const element = screen.getByText(/todo-list/i);
    expect(element).toBeInTheDocument();
});
