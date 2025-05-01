# 🖥️ Backend - Lista de Tarefas (API REST)

Este é o backend da aplicação **Lista de Tarefas**, desenvolvido em **Django** e **Django REST Framework**, como parte da Atividade Prática de Arquitetura de Software (2025.1) no curso de **Análise e Desenvolvimento de Sistemas - IFRN**.

A aplicação segue a **arquitetura MVC**, sendo essa a camada **Model** e **Controller**, responsável por gerenciar os dados e expor endpoints para o frontend.

---

## 🚀 Tecnologias Utilizadas

- [Django](https://www.djangoproject.com/) – Framework web para desenvolvimento rápido e seguro
- [Django REST Framework](https://www.django-rest-framework.org/) – Extensão para criação de APIs RESTful
- [SQLite](https://www.sqlite.org/index.html) – Banco de dados leve e integrado
- [django-cors-headers](https://pypi.org/project/django-cors-headers/) – Configuração de CORS para integração com o frontend

---

## 📁 Estrutura do Projeto

```
.
├── core/        → Configurações principais do projeto Django
├── task/        → Aplicação principal com o modelo e endpoints de tarefas
├── db.sqlite3   → Banco de dados SQLite
└── requirements.txt → Dependências do projeto
```

---

## 📦 Instalação e Execução

1. Acesse a pasta do backend:

```bash
cd back-end
```

2. Crie e ative um ambiente virtual:

```bash
python -m venv venv
source venv/bin/activate  # No Windows: venv\Scripts\activate
```

3. Instale as dependências:

```bash
pip install -r requirements.txt
```

4. Aplique as migrações para configurar o banco de dados:

```bash
python manage.py migrate
```

5. Inicie o servidor de desenvolvimento:

```bash
python manage.py runserver
```

A API estará disponível em: [http://localhost:8000](http://localhost:8000)

---

## 🛠️ Endpoints Disponíveis

A API expõe os seguintes endpoints para gerenciar tarefas:

| Método | Endpoint         | Descrição                          |
|--------|------------------|------------------------------------|
| GET    | `/api/task/`     | Lista todas as tarefas            |
| POST   | `/api/task/`     | Cria uma nova tarefa              |
| GET    | `/api/task/<id>/`| Retorna os detalhes de uma tarefa |
| PUT    | `/api/task/<id>/`| Atualiza uma tarefa existente      |
| DELETE | `/api/task/<id>/`| Exclui uma tarefa                 |

---

## 📄 Licença

Este projeto está licenciado sob a [Licença Apache 2.0](https://www.apache.org/licenses/LICENSE-2.0).