import { useState } from 'react';
import './style.css';
import { FiCheckCircle, FiEye, FiTrash2 } from 'react-icons/fi';

export interface TaskItemProps {
    title: string;
    description: string;
    completed?: boolean;
}

export const TaskItem = ({title, description, completed = false}: TaskItemProps) => {
    const [completedState, setCompletedState] = useState(completed);

    const handleFinish = () => {
        setCompletedState(!completedState);
    };

    return (
        <div className="task-item">
            <div className="task-item-info" style={{ borderLeftColor: completedState ? '#28A745' : '#DC3545' }}>
                <h2>{title}</h2>
                <p>{description}</p>
            </div>
            
            <div className="task-item-actions">
                <button className='finish' onClick={handleFinish}><FiCheckCircle size={20} /></button>
                <button className='view'><FiEye size={20} /></button>
                <button className='delete'> <FiTrash2 size={20} /></button>
            </div>
        </div>
    );
}