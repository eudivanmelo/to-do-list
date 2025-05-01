import { Task } from "@/models/task";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import api from "@/services/api";

export const useCreateTask = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: async (newTask: Omit<Task, 'id'| 'completed' | 'created_at' | 'updated_at'>) => {
            const response = await api.post('task/', newTask);
            return response.data;
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['tasks'] });
        },
    });
};

export const useUpdateTask = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: async (task: Task) => {
            const response = await api.put(`task/${task.id}/`, task);
            return response.data;
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['tasks'] });
        },
    });
}

export const useDeleteTask = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: async (taskId: number) => {
            const response = await api.delete(`task/${taskId}/`);
            return response.data;
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['tasks'] });
        },
    });
}
