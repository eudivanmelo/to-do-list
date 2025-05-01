import { useCreateTask } from '@/services/mutations/tasks';
import './style.css';
import { ThreeDot } from 'react-loading-indicators';

export const TaskCreateForm = () => {
    const createTaskMutation = useCreateTask();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const form = e.target as HTMLFormElement;
        const formData = new FormData(form);

        const data = Object.fromEntries(formData.entries());
        const newTask = {
            title: data.title.toString(),
            description: data.description.toString(),
        }

        createTaskMutation.mutate(newTask);

        form.reset();
    };

    return (
        <div className="task-create-form">
            <form className="task-form" onSubmit={handleSubmit}>
                <div className="form-group">
                    <input name='title' type="text" placeholder="Título" />
                    <textarea name='description' placeholder="Descrição"></textarea>
                </div>

                <button type="submit" disabled={createTaskMutation.isPending}>
                    {createTaskMutation.isPending ? 
                    <ThreeDot color="#fff" size="small" />
                     : 
                    "Criar"
                    }
                </button>
            </form>
        </div>
    );
}