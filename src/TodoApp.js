import React, { useState } from 'react';
import { Paper, AppBar, Toolbar, Typography } from '@material-ui/core';
import TodoList from './TodoList';

const initialTodos = [
    {id: 1, task:"Learn react hooks", completed: false},
    {id: 2, task:"Lose weight", completed: false},
    {id: 3, task:"Get buff", completed: false},

]

function TodoApp() {
    const [todos, setTodos] = useState(initialTodos);
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
            <TodoList todos={todos} />

        </Paper>
    );
}

export default TodoApp;
