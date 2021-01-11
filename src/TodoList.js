import { List, Paper } from '@material-ui/core';
import React from 'react';
import Todo from './Todo';

function TodoList({ todos, removeTodo, editTodo, toggleTodoComplete }) {
    if(todos.length)
    return (
        <Paper>
            <List>
            {todos.map((todo, i )=> (
                <Todo 
                 {...todo}
                dataKey={i} 
                key={i} 
                removeTodo={removeTodo}
                toggleTodoComplete={toggleTodoComplete}
                editTodo={editTodo}
                />
            ))}
            </List> 
        </Paper>
    )
    return null;
}

export default TodoList;
