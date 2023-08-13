import { render, screen, cleanup } from '@testing-library/react';
import userEvent from '@testing-library/user-event'; 
import ToDo from '../components/ToDo';

afterEach(() => {
    cleanup();
})

const mockData = {'id': 1, 'task': 'Test task 1', 'complete': true};

test('Item renders successfully', () => {
    render(<ToDo todo={mockData} />)
    expect(screen.getByText(/test task 1/i)).toBeInTheDocument();
});

test("Todo click handler called", async () => {
    const mockHandleClick = jest.fn();            
    render(<ToDo 
                todo={mockData} 
                handleToggle = {mockHandleClick}
          />)  
    await userEvent.click(screen.getByText(/test task 1/i));
    expect(mockHandleClick).toHaveBeenCalled();        
});






    