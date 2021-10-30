import {FaTimes} from 'react-icons/fa'

export const Task = ({ task, onDelete }) => {
    return (
        <div className='task'>
            <h3 key={task.id}>
                {task.text} 
                <FaTimes style={{color: 'red', cursor: 'pointer'}}
                    onClick={onDelete}
                />
                </h3>
            <p>{task.day}</p>
        </div>
    )
}
