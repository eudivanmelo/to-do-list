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

## 🌐 Frontend (`front/`)

- Desenvolvido em **React + TypeScript** com Vite
- Responsável pela **interface do usuário** (View)
- Consome a API para exibir e manipular tarefas
- Estilo personalizado com CSS puro

📄 Detalhes completos em [`front-end/README.md`](front-end/README.md)

---

## 🖥️ Backend (`back/`)

- Desenvolvido com **Django** e **Django REST Framework**
- Implementa os **Modelos** e os **Controladores**
- Expõe endpoints para as operações CRUD
- Usa banco de dados **SQLite**

📄 Detalhes completos em [`back-end/README.md`](back/README.md)

---

## 🚀 Executando o Projeto

### Backend (API)

```bash
cd back-end
python manage.py runserver
```

A API será iniciada em: [http://localhost:8000](http://localhost:8000)

---

### Frontend (SPA)

```bash
cd front-end
npm install
npm run dev
```

A interface estará acessível em: [http://localhost:5173](http://localhost:5173)

---

## 📄 Licença

Este projeto está licenciado sob a [Licença Apache 2.0](https://www.apache.org/licenses/LICENSE-2.0).