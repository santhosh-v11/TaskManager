

import { useState } from 'react';
import './Taskin.css';

export default function TaskIn({addTask} ){
    const [value,setValue]=useState("");
    const handlesubmit=(e)=>{
        e.preventDefault();
        if(value.trim())
        {
            console.log("formsubmitted",value)
            addTask(value); 
            setValue("")
        }
        else
            alert("Enter Task todo");

    }
    return(
        <>
          <form action="" class="task-form" onSubmit={handlesubmit}>
                <input type="text" onChange={(e)=>setValue(e.target.value)} value={value} placeholder="Add a Task Here!" class="task-input"/>
                <button type="submit" class="submit-btn">Add Task</button>
         </form>

        </>
    )
}