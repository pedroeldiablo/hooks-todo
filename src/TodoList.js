import React from 'react'
import { Paper, List, ListItem, ListItemText, Divider } from '@material-ui/core';
import Todo from './Todo';

function TodoList({ todos, removeTodo, editTodo, toggleTodoComplete }) {
    if(todos.length)
    return (
        <Paper>
            <List>
            {todos.map((todo, i )=> (
                <>
                <Todo 
                task={todo.task} 
                id={todo.id} 
                key={todo.id} 
                completed={todo.completed}
                removeTodo={removeTodo}
                toggleTodoComplete={toggleTodoComplete}
                editTodo={editTodo}
                />
                {i < todos.length -1 && <Divider />  }
                </>
            ))}

            </List>
            
            
        </Paper>
    )
    return null;
}

export default TodoList;
