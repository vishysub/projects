import {FaTimes} from 'react-icons/fa'
const Task = ({task}) => {
    return (
        <div className = 'task'>
            <h3>{task.task} 
            <FaTimes style = {{color : 'Red', cursor :'pointer'}}/>
            
            </h3>
            <p>{task.priority}</p>
        </div>
    )
}
export default Task;