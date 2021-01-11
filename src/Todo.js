import { Checkbox, Divider, IconButton, ListItem, ListItemSecondaryAction, ListItemText } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import React from 'react';
import EditTodoForm from './EditTodoForm';
import useToggleState from './hooks/useToggleState';


 function Todo({id, task, completed, removeTodo, toggleTodoComplete, editTodo, dataKey}) {
    const [isEditing, toggleIsEditing] = useToggleState();
    return (
        <ListItem style={{ height:"64px"}}>
            {isEditing ? 
            <EditTodoForm 
            editTodo={editTodo} 
            id={id} 
            // key={id}
            task={task} 
            dataKey={dataKey}
            toggleIsEditing={toggleIsEditing}/> :
            <>
            <Checkbox tabIndex={-1} checked={completed} onClick={() =>toggleTodoComplete(id)} />
            <p>{dataKey + 1 }</p>
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
            <Divider />
            </>
        }
        </ListItem>
    )
}

export default Todo;
