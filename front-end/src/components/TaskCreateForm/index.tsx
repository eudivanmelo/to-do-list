import { useCreateTask } from '@/services/mutations/tasks';
import './style.css';
import { ThreeDot } from 'react-loading-indicators';
import { z } from 'zod';
import { useState } from 'react';

const taskSchema = z.object({
    title: z.string().nonempty('Título é obrigatório').max(50, 'Título deve ter no máximo 50 caracteres'),
    description: z.string().nonempty('Descrição é obrigatória').max(200, 'Descrição deve ter no máximo 200 caracteres'),
});

export const TaskCreateForm = () => {
    const createTaskMutation = useCreateTask();
    const [errors, setErrors] = useState<{ title?: string; description?: string }>({});

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const form = e.target as HTMLFormElement;
        const formData = new FormData(form);

        const data = Object.fromEntries(formData.entries());
        const result = taskSchema.safeParse({
            title: data.title?.toString().trim(),
            description: data.description?.toString().trim(),
        })

        if (!result.success){
            const fieldErrors = result.error.flatten().fieldErrors;

            setErrors({
                title: fieldErrors.title?.[0],
                description: fieldErrors.description?.[0],
            })

            return;
        }

        createTaskMutation.mutate(result.data);
        form.reset();
        setErrors({});
    };

    return (
        <div className="task-create-form">
            <form className="task-form" onSubmit={handleSubmit}>
                <div className="form-group">
                    <input name='title' type="text" placeholder="Título" />
                    {errors.title && <span className="input-error">{errors.title}</span>}
                    <textarea name='description' placeholder="Descrição"></textarea>
                    {errors.description && <span className="input-error">{errors.description}</span>}
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