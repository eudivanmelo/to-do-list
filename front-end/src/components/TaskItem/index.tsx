import { useState } from 'react';
import './style.css';
import { FiCheckCircle, FiCircle, FiTrash2 } from 'react-icons/fi';
import { Task } from '@/models/task';
import { useDeleteTask, useUpdateTask } from '@/services/mutations/tasks';

export interface TaskItemProps {
    task: Task;
}

export const TaskItem = ({task}: TaskItemProps) => {
    const [completedState, setCompletedState] = useState(task.completed);
    const updateTaskMutation = useUpdateTask();
    const deleteTaskMutation = useDeleteTask();

    const handleFinish = () => {
        setCompletedState(!completedState);

        updateTaskMutation.mutate({
            ...task,
            completed: !completedState,
        });
    };

    const handleDelete = () => {
        deleteTaskMutation.mutate(task.id);
    };

    return (
        <div className="task-item">
            <div className="task-item-info" style={{ borderLeftColor: completedState ? '#28A745' : '#DC3545' }}>
                <h2>{task.title}</h2>
                <p>{task.description}</p>
            </div>
            
            <div className="task-item-actions">
                <button className='finish' onClick={handleFinish}>
                    {!completedState ? 
                        <FiCircle size={20} /> : 
                        <FiCheckCircle size={20} color='28A745' />
                    }
                    </button>
                <button className='delete' onClick={handleDelete}> <FiTrash2 size={20} /></button>
            </div>
        </div>
    );
}