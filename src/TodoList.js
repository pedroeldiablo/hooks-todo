import React from 'react'
import { Paper, List, ListItem, ListItemText, Divider } from '@material-ui/core';
import Todo from './Todo';

function TodoList({ todos, removeTodo, toggleTodoComplete }) {
    return (
        <Paper>
            <List>
            {todos.map(todo => (
                <>
                <Todo 
                task={todo.task} 
                id={todo.id} 
                key={todo.id} 
                completed={todo.completed}
                removeTodo={removeTodo}
                toggleTodoComplete={toggleTodoComplete}
                />
                <Divider />
                </>
            ))}

            </List>
            
            
        </Paper>
    )
}

export default TodoList;
