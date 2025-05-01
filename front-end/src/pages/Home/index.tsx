import { useTasks } from "@/services/queries/tasks";
import { TaskCreateForm } from "@/components/TaskCreateForm";
import { TaskItem } from "@/components/TaskItem";
import './style.css';
import { Task } from "@/models/task";
import { ThreeDot } from "react-loading-indicators";

export const Home = () => {
  const { data: tasks, isLoading, error } = useTasks();

  return (
    <div className="home">
      <div className='task-container'>
        <h1>Lista de Tarefas</h1>
        <TaskCreateForm />

        {isLoading && <div className="loading"><ThreeDot color="#1A1A1A" size="small"/></div>}

        {error && <p className="error">Error: {error.message || 'Erro desconhecido, tente novamente mais tarde!'}</p>}

        {tasks?.length === 0 && <h3 className="empty-message">Não há tarefas na lista!</h3>}

        {tasks?.map((task: Task) => (
          <TaskItem key={task.id} task={task} />
        ))}
      </div>
    </div>
  );
}
