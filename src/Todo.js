import React from 'react';
import useToggleState from './hooks/useToggleState';
import EditTodoForm from './EditTodoForm';

import { Paper, List, ListItem, ListItemText, Divider, Checkbox, ListItemSecondaryAction, IconButton } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';

 function Todo({id, task, completed, removeTodo, toggleTodoComplete, editTodo}) {
    const [isEditing, toggleIsEditing] = useToggleState();
    return (
        <ListItem style={{ height:"64px"}}>
            {isEditing ? 
            <EditTodoForm 
            editTodo={editTodo} 
            id={id} 
            task={task} 
            toggleIsEditing={toggleIsEditing}/> :
            <>
            <Checkbox tabIndex={-1} checked={completed} onClick={() =>toggleTodoComplete(id)} />
            <ListItemText style={{textDecoration: completed ? "line-through" : "none" }}>
               {task}
            </ListItemText>
            <ListItemSecondaryAction>
                <IconButton aria-label="Delete" onClick={() =>removeTodo(id)}>
                    <DeleteIcon />
                </IconButton>
                <IconButton aria-label="Edit" onClick={toggleIsEditing}>
                    <EditIcon />
                </IconButton>

            </ListItemSecondaryAction>
            </>
        }
        </ListItem>
    )
}

export default Todo;
