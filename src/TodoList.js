import React from 'react'
import { Paper, List, Divider } from '@material-ui/core';
import Todo from './Todo';

function TodoList({ todos, removeTodo, editTodo, toggleTodoComplete }) {
    if(todos.length)
    return (
        <Paper>
            <List>
            {todos.map((todo, i )=> (
                <>
                <Todo 
                 {...todo}
                key={todo.id} 
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
