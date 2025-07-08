import { useState } from 'react'
import TaskIn from './TaskIn'
import './taskman.css'
import TaskList from './TaskList';
import CompletedList from './CompletedList';

export default function TaskMan(){

    const [task,setTask] = useState([]);
    const [Completed,setCompleted] = useState([]);
    
    const addTask=(text)=>{
        const newTask ={id:Date.now(), text, Completed: false};
        setTask([...task,newTask])
    }

    const markComplete = (taskId)=>{
        const selected = task.find((t)=>t.id==taskId);
        setCompleted([...Completed,selected]);
        setTask(task.filter((t) => t.id !== taskId));
    }
    return( 
        
        <>  
            <div class="bg"></div>
            <div class="bg bg2"></div>
            <div class="bg bg3"></div>
       
            <div className='header-container'>
            <h2 className="task-manager-title">TaskManager</h2>
            <TaskIn addTask={addTask}/>
            <div className='main'>
                <div className='active-tasks'>
                    <h3 className="tasks-counter">Tasks to do <span className="task-count">{task.length}</span></h3>
                    <TaskList task={task} onComplete={markComplete}/>
                </div>
                <div className='completed-tasks'>
                    <h3 className='com'>Completed Tasks <span className="task-count">{Completed.length}</span></h3>
                    <CompletedList task={Completed}/>
                </div>
            </div>
            </div>
        </>
    )
}