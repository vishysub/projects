import { Task } from './Task'
const Tasks =({tasks}) => {

    return (
        <div>
            {tasks.map((task)=> (
            <Task key = {task.id} task = {task} />
            ))}
        </div>
    )
}
export default Tasks