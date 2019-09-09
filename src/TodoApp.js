import React from 'react';
import useTodosState from './hooks/useTodosState';

import { Paper, AppBar, Toolbar, Typography, Grid } from '@material-ui/core';
import TodoList from './TodoList';
import TodoForm from './TodoForm';

function TodoApp() {
    const initialTodos = [{ id:1, task:"Pet a monkey", completed:false}]
    const {todos,  addTodo, removeTodo, toggleTodoComplete, editTodo} = useTodosState(initialTodos)


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
