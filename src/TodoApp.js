import React, { useState } from 'react';

import { Paper, AppBar, Toolbar, Typography, Grid } from '@material-ui/core';
import uuid from 'uuid/v4';
import TodoList from './TodoList';
import TodoForm from './TodoForm';

function TodoApp() {
    const initialTodos = [
        {id: 1, task:"Learn react hooks", completed: false},
        {id: 2, task:"Lose weight", completed: true},
        {id: 3, task:"Get buff", completed: false},
    
    ];
    
    const [todos, setTodos] = useState(initialTodos);

    const addTodo = newTodoText => {
        setTodos([...todos, {id: uuid(), task: newTodoText, completed: false }]);

    }

    const removeTodo = todoId => {
        const updatedTodos = todos.filter(todo => todo.id !== todoId);
        setTodos(updatedTodos);
    };

    const toggleTodoComplete = todoId => {
        const updatedTodos = todos.map(todo =>
            todo.id === todoId ? {...todo, completed: !todo.completed} : todo
            );
        setTodos(updatedTodos);
        
    };

    const editTodo =  (todoId, newTask) => {
        const updatedTodos = todos.map(todo =>
            todo.id === todoId ? {...todo, task: newTask} : todo
            );
        setTodos(updatedTodos);  
    };

   
    return (
        <Paper
            style={{
                padding: 0,
                margin: 0, 
                height: "100vh",
                backgroundColor: "red"
            }}
            elevation={0}
        >
            <AppBar color='primary' position='static' style={{ height: "64px"}}>
                <Toolbar>
                    <Typography color='inherit'>TODOS WITH HOOKS</Typography>
                </Toolbar>
            </AppBar>
            <Grid container justify="center" style={{ marginTop: "1rem"}} >
                <Grid item xs={11} md={8} lg={4} > 
                <TodoForm addTodo={addTodo}/>
                <TodoList 
                todos={todos} 
                removeTodo={removeTodo} 
                toggleTodoComplete={toggleTodoComplete}
                editTodo ={editTodo}
                />
                </Grid>     
            </Grid>

        </Paper>
    );
}

export default TodoApp;
