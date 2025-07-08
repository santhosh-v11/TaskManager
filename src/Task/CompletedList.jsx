// import './tasklist.css';
import './completedlist.css'
export default function CompletedList({ task }) {
  return (
    <ul className='task-list'>
      {task.map((item) => (
        <li className='task-item' key={item.id}>
          <span className='task-text completed'>{item.text}</span>
        </li>
      ))}
    </ul>
  );
}
