import React, { useState } from 'react';
import Details from './Details'
import TaskList from './TaskList'
import EditTask from './EditTask'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import '../css/bootstrap.min.css'
import '../css/index.css'
import AddTask from './AddTask'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

const TodoList = [
    {
        id: 1,
        task: 'Clean the house',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti qui rerum assumenda quis debitis vitae error deserunt impedit, dicta omnis!',
        done: 100
    },
    {
        id: 2,
        task: 'Do my homework',
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
        <BrowserRouter>
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
                    <Routes>

                        <Route path='/:title' element={<Details openEdit={openEdit} setOpenEdit={setOpenEdit} setActive={setActive} setTodo={setTodo} todo={todo} active={active} />} />
                    </Routes>




                </div>
            </div>
        </BrowserRouter>
    )
}

export default App;