import './tasklist.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';

export default function TaskList({task,onComplete}){
    return(
        <>
            <ul className='task-list'> {task.map((task) =>( <li className='task-item' key={task.id}> <span className='task-text'>{task['text']}</span>
            <button className='task-remove' onClick={()=>onComplete(task.id)} >
                <FontAwesomeIcon icon={faCircleCheck} style={{ color: 'green' }} />
            </button>
             </li>) )}   </ul>

            
        
        </>
    )
}