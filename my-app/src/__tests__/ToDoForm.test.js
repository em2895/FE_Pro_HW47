import { render, screen, cleanup } from '@testing-library/react';
import ToDoForm from '../components/ToDoForm';

afterEach(() => {
    cleanup();
})

test("Input renders successfully", () => {
    render(<ToDoForm />)
    const inputElement = screen.getByPlaceholderText(/enter todo/i);
    expect(inputElement).toBeInTheDocument();
});

test("Button renders successfully", () => {
    render(<ToDoForm />)
    const submitButton = screen.getByRole('button', { name: /submit/i });
    expect(submitButton).toBeInTheDocument();
});



