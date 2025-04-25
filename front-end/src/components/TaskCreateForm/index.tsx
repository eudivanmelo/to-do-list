import './style.css';

export const TaskCreateForm = () => {
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Tarefa criada!");
    };

    return (
        <div className="task-create-form">
            <form className="task-form" onSubmit={handleSubmit}>
                <div className="form-group">
                    <input name='title' type="text" placeholder="Título" />
                    <textarea name='description' placeholder="Descrição"></textarea>
                </div>

                <button type="submit">Criar</button>
            </form>
        </div>
    );
}