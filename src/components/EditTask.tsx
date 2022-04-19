import React from 'react'
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

interface EditTaskProps
{

    active: number,
    setTodo: React.Dispatch<React.SetStateAction<{
        id: number;
        task: string;
        description: string;
        done: number;
    }[]>>,
    todo: {
        id: number;
        task: string;
        description: string;
        done: number;
    }[],
    openEdit: boolean,
    setOpenEdit: React.Dispatch<React.SetStateAction<boolean>>
}

const EditTask = (props: EditTaskProps): JSX.Element =>
{
    const handleForm = (e: any) =>
    {
        e.preventDefault();
        const otherObjects = props.todo.filter((item) => item.id !== props.active);
        currentObj[0].task = e.target.title.value;
        currentObj[0].description = e.target.description.value;
        currentObj[0].done = e.target.done.value;
        otherObjects.push(currentObj[0]);
        props.setTodo(otherObjects);
        props.setOpenEdit(false);

    }

    const currentObj = props.todo.filter((item) => item.id === props.active);

    return (
        <div>
            <Dialog disablePortal open={props.openEdit} onClose={() => props.setOpenEdit(false)}>
                <DialogTitle>Edit task</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Please fill up the fields if you want to add new task.
                    </DialogContentText>
                    <form id='formid' onSubmit={handleForm}>
                        <TextField
                            name='title'
                            margin="dense"
                            id="title"
                            label="Title"
                            type="text"
                            fullWidth
                            variant="standard"
                            autoComplete='d'
                            defaultValue={currentObj[0].task}
                        />
                        <TextField
                            name='description'
                            margin="dense"
                            id="description"
                            label="Description"
                            type="text"
                            fullWidth
                            variant="standard"
                            autoComplete='d'
                            defaultValue={currentObj[0].description}
                        />
                        <TextField
                            name='done'
                            margin="dense"
                            id="done"
                            label="Done"
                            type="text"
                            fullWidth
                            variant="standard"
                            required
                            autoComplete='d'
                            defaultValue={currentObj[0].done}
                        />

                    </form>
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => props.setOpenEdit(false)}><strong>Cancel</strong></Button>
                    <Button form='formid' type='submit' ><strong>Edit</strong></Button>
                </DialogActions>
            </Dialog>
        </div >
    )
}


export default EditTask;