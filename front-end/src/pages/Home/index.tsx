import { TaskCreateForm } from "../../components/TaskCreateForm";
import { TaskItem } from "../../components/TaskItem";
import './style.css';

const MOCK_TASKS = [
  {
    id: 1,
    title: "Tarefa 1",
    description: "Descrição da tarefa 1",
    completed: false,
  },
  {
    id: 2,
    title: "Tarefa 2",
    description: "Descrição da tarefa 2",
    completed: false,
  },
  {
    id: 3,
    title: "Tarefa 3",
    description: "Descrição da tarefa 3",
    completed: true,
  },
  {
    id: 4,
    title: "Tarefa 4",
    description: "Descrição da tarefa 4",
    completed: true,
  },
  {
    id: 5,
    title: "Tarefa 5",
    description: "Descrição da tarefa 5",
    completed: false,
  },
];

export const Home = () => {
  return (
    <div className="home">
      <div className='task-container'>
        <h1>Lista de Tarefas</h1>
        <TaskCreateForm />

        {MOCK_TASKS.map((task) => (
          <TaskItem key={task.id} completed={task.completed} title={task.title} description={task.description} />
        ))}
      </div>
    </div>
  );
}
