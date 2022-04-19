import React from 'react'
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { useNavigate } from 'react-router-dom'

interface propsInterface
{
    active: number,
    setActive: React.Dispatch<React.SetStateAction<number>>
    openEdit: boolean,
    setOpenEdit: React.Dispatch<React.SetStateAction<boolean>>,
    todo: {
        id: number,
        task: string,
        description: string,
        done: number
    }[],
    setTodo: React.Dispatch<React.SetStateAction<{
        id: number,
        task: string,
        description: string,
        done: number
    }[]>>
}


const Details = (props: propsInterface): JSX.Element =>
{
    const navigate = useNavigate();
    const deleteTask = () =>
    {
        props.setTodo(props.todo.filter((item) => item.id !== props.active))
        props.setActive(0);
        navigate('/')
    }

    const renderTask = () =>
    {
        return props.todo.filter((item) => item.id === props.active);
    }

    return (
        < div className="col-xs-12 col-lg-6">
            <div className="row">
                <div className="detailsBoxPosition">
                    <h3 className="detailsTitle">
                        {renderTask()[0].task}
                    </h3>
                    <EditIcon onClick={() => props.setOpenEdit(true)} className="cursor"></EditIcon>
                    <DeleteIcon onClick={deleteTask} className="cursor deleteMargin"></DeleteIcon>
                    <p className="detailsDescription">
                        {renderTask()[0].description}
                    </p>
                    <div className="progress">
                        <div className="progress-bar" role="progressbar" style={{ width: renderTask()[0].done + '%' }} aria-valuenow={renderTask()[0].done} aria-valuemin={0} aria-valuemax={100}>{renderTask()[0].done}</div>
                    </div>
                    <p className="detailsDate">
                        05.02.2019
                    </p>
                </div>
            </div>
        </div>
    )
}


export default Details;