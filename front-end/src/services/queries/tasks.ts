import { useQuery  } from "@tanstack/react-query";
import api from '@/services/api';
import { Task } from "@/models/task";

export const useTasks = () => {
    return useQuery({
        queryKey: ['tasks'],
        queryFn: async () => {
            const response = await api.get('task/');
            return response.data as Task[];
        },
    });
};