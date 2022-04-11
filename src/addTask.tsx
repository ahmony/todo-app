import React from 'react'
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';


interface addTaskInterface
{
    open: boolean,
    setOpen: React.Dispatch<React.SetStateAction<boolean>>,
    todo: {
        id: number;
        task: string;
        description: string;
        done: number;
    }[],
}

const AddTask = (props: addTaskInterface): JSX.Element =>
{
    const handleForm = (e: any) =>
    {
        e.preventDefault();
        const obj = { id: props.todo.length === 0 ? 1 : props.todo[props.todo.length - 1].id + 1, task: e.target.title.value, description: e.target.description.value, done: 0 };
        props.todo.push(obj);
        props.setOpen(false);
    }

    return (
        <div>
            <Dialog disablePortal open={props.open} onClose={() => props.setOpen(false)}>
                <DialogTitle>Add new task</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Please fill up the fields if you want to add new task.
                    </DialogContentText>
                    <form id='formid' onSubmit={handleForm}>
                        <TextField
                            name='title'
                            margin="dense"
                            id="name"
                            label="Title"
                            type="text"
                            fullWidth
                            variant="standard"
                            required
                            autoComplete='d'
                        />
                        <TextField
                            name='description'
                            margin="dense"
                            id="name"
                            label="Description"
                            type="text"
                            fullWidth
                            variant="standard"
                            required
                            autoComplete='d'
                        />

                    </form>
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => props.setOpen(false)}><strong>Cancel</strong></Button>
                    <Button form='formid' type='submit' ><strong>Add</strong></Button>
                </DialogActions>
            </Dialog>
        </div >
    )
}

export default AddTask;