import React from 'react'
import { Paper, List, ListItem, ListItemText, Divider, Checkbox, ListItemSecondaryAction, IconButton } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';

 function Todo({task, completed, removeTodo, toggleTodoComplete, id}) {
    return (
        <ListItem>
            <Checkbox tabIndex={-1} checked={completed} onClick={() =>toggleTodoComplete(id)} />
            <ListItemText style={{textDecoration: completed ? "line-through" : "none" }}>
               {task}
            </ListItemText>
            <ListItemSecondaryAction>
                <IconButton aria-label="Delete" onClick={() =>removeTodo(id)}>
                    <DeleteIcon />
                </IconButton>
                <IconButton aria-label="Edit">
                    <EditIcon />
                </IconButton>

            </ListItemSecondaryAction>
        </ListItem>
    )
}

export default Todo;
