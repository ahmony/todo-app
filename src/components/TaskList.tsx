import React from 'react'
import { useNavigate } from 'react-router-dom'
interface taskListProps
{
    active: number,
    setActive: React.Dispatch<React.SetStateAction<number>>,
    todo: {
        id: number,
        task: string,
        description: string,
        done: number
    }[]
}

const TaskList = ({ active, setActive, todo }: taskListProps): JSX.Element =>
{
    let navigate = useNavigate();
    const listItems: JSX.Element[] =
        todo.map((item) =>
        {
            return (<li onClick={() => { setActive(item.id); navigate(`${item.id}`) }} className={`list-group-item xD cursor ${active === item.id ? 'active' : null}`}>{item.task}<span className="span"> {item.done}%</span></li>)
        })

    return (

        <div className="col-lg-5 col-xs-12">
            <p className="beforeListP">In progress</p>
            <ul className="list-group">
                {listItems}
            </ul>
        </div>
    )
}

export default TaskList;