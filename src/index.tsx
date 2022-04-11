import React, { useState } from 'react';
import ReactDOMClient from 'react-dom/client'
import Details from './details'
import TaskList from './taskList'
import EditTask from './editTask'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import './css/bootstrap.min.css'
import './css/index.css'
import AddTask from './addTask'

const TodoList = [
    {
        id: 1,
        task: 'Ocistiti kucu',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti qui rerum assumenda quis debitis vitae error deserunt impedit, dicta omnis!',
        done: 100
    },
    {
        id: 2,
        task: 'Heading 2',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, corrupti omnis sunt distinctio est saepe?',
        done: 50
    }
]


const App = (): JSX.Element =>
{
    let [active, setActive] = useState(Number);
    let [todo, setTodo] = useState(TodoList);
    let [open, setOpen] = useState(false);
    let [openEdit, setOpenEdit] = useState(false);

    return (
        <div className="container ">
            <div className="row">

                <h3 className="mainTitle">
                    TODO APP <span><AddCircleOutlineIcon onClick={() => setOpen(true)} className="cursor s"></AddCircleOutlineIcon></span>
                </h3>
                <br></br>
                <AddTask open={open} setOpen={setOpen} todo={todo} />
                {openEdit === true ? <EditTask setTodo={setTodo} active={active} todo={todo} openEdit={openEdit} setOpenEdit={setOpenEdit} /> : null}
                <TaskList setActive={setActive} active={active} todo={todo} />

                <div className="col-lg-1">
                </div>

                {active > 0 ? <Details openEdit={openEdit} setOpenEdit={setOpenEdit} setActive={setActive} setTodo={setTodo} todo={todo} active={active} /> : null}

            </div>
        </div>
    )
}

const root = ReactDOMClient.createRoot(document.querySelector("#root") as HTMLElement);
root.render(<App />);

