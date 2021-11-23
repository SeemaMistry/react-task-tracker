import {FaTimes} from 'react-icons/fa'

export const Task = ({ task, onDelete, onDbClick }) => {
    return (
        <div key={task.id} className={`task ${task.reminder ? "reminder" : ""}`} onDoubleClick={() => onDbClick(task.id)}>
            <h3>
                {task.text} 
                <FaTimes style={{color: 'red', cursor: 'pointer'}}
                    onClick={() => onDelete(task.id)}  
                />
            </h3>
            <p>{task.day}</p>
        </div>
    )
}
