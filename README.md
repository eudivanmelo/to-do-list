# ✅ Lista de Tarefas - Arquitetura MVC

Este repositório contém a implementação completa da aplicação **Lista de Tarefas**, desenvolvida como parte da disciplina **Arquitetura de Software (2025.1)** do curso de **Tecnologia em Análise e Desenvolvimento de Sistemas - IFRN**.

A aplicação foi construída com base na **arquitetura MVC**, separando as responsabilidades entre **Modelo**, **Visão** e **Controlador**, e utilizando tecnologias modernas tanto no backend quanto no frontend.

---

## 📁 Estrutura do Projeto

```
.
├── front-end/   → Aplicação SPA (React + TypeScript)
└── back-end/    → API REST (Django + Django REST Framework)
```

---

## 🌐 Frontend (`front-end/`)

- Desenvolvido em **React + TypeScript** com Vite
- Responsável pela **interface do usuário** (View)
- Consome a API para exibir e manipular tarefas
- Validação de formulários com **Zod**
- Gerenciamento de estado assíncrono com **React Query**
- Estilo personalizado com CSS puro

📄 Detalhes completos em [`front-end/README.md`](front-end/README.md)

---

## 🖥️ Backend (`back-end/`)

- Desenvolvido com **Django** e **Django REST Framework**
- Implementa os **Modelos** e os **Controladores**
- Expõe endpoints para as operações CRUD
- Configuração de CORS para integração com o frontend
- Usa banco de dados **SQLite**

📄 Detalhes completos em [`back-end/README.md`](back-end/README.md)

---

## 🚀 Executando o Projeto

### Backend (API)

1. Acesse a pasta do backend:

```bash
cd back-end
```

2. Instale as dependências (certifique-se de estar no ambiente virtual):

```bash
pip install -r requirements.txt
```

3. Aplique as migrações:

```bash
python manage.py migrate
```

4. Inicie o servidor:

```bash
python manage.py runserver
```

A API será iniciada em: [http://localhost:8000](http://localhost:8000)

---

### Frontend (SPA)

1. Acesse a pasta do frontend:

```bash
cd front-end
```

2. Instale as dependências:

```bash
npm install
```

3. Rode o servidor de desenvolvimento:

```bash
npm run dev
```

A interface estará acessível em: [http://localhost:5173](http://localhost:5173)

---

## 📄 Licença

Este projeto está licenciado sob a [Licença Apache 2.0](https://www.apache.org/licenses/LICENSE-2.0).