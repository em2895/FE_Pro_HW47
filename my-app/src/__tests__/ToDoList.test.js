import { render, screen, cleanup } from '@testing-library/react';
import ToDoList from '../components/ToDoList';

afterEach(() => {
    cleanup();
})

const mockData = [
    {
        'id': 1,
        'task': 'Test task 1'        
    },
    {
        'id': 2,
        'task': 'Test task 2'        
    },
    {
        'id': 3,
        'task': 'Test task 3'        
    },
]    

test("Items render successfully", () => {
    render(<ToDoList toDoList={mockData} />)
    expect(screen.getByText(/test task 3/i)).toBeInTheDocument();
});