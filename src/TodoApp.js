import { AppBar, Grid, Paper, Toolbar, Typography } from '@material-ui/core';
import React from 'react';
import useTodosState from './hooks/useTodosState';
import TodoForm from './TodoForm';
import TodoList from './TodoList';


function TodoApp() {
    const initialTodos = [{ id:1201, task:"Pet a monkey", completed:false}]
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
