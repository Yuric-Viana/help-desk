# 🛠️ Help Desk System

Plataforma Full-Stack de gestão de chamados com controle de acesso baseado em papéis (Admin, Técnico e Cliente). O sistema gerencia a abertura de tickets, catálogo de serviços com cálculo automático de custos e a distribuição de atendimentos baseada na disponibilidade dos técnicos. Desenvolvido com foco no conceito **Mobile First**.

## 🚀 Tecnologias Utilizadas

Apesar do escopo inicial prever uma arquitetura separada (Express + Vite), este projeto foi otimizado e unificado utilizando o ecossistema moderno do Next.js:

* **Framework:** Next.js (App Router & Server Actions)
* **Linguagem:** TypeScript
* **Banco de Dados:** PostgreSQL
* **ORM:** Prisma
* **Autenticação:** NextAuth.js (Estratégia JWT)
* **Estilização:** Tailwind CSS & shadcn/ui
* **Validação de Dados:** Zod
* **Deploy:** Vercel (Frontend + Backend Serverless)

---

## ⚙️ Funcionalidades por Perfil

O sistema possui controle rígido de rotas e ações dependendo do papel do usuário autenticado:

### 👑 Administrador (Admin)
* **Gestão de Técnicos:** Criação, edição e listagem. Ao criar um técnico, uma senha provisória é gerada. O horário padrão de atendimento definido é o horário comercial (08:00 às 12:00 e 14:00 às 18:00).
* **Catálogo de Serviços:** Criação, edição e listagem. Permite desativar serviços (Soft Delete), impedindo-os de aparecer em novos chamados, mas mantendo o histórico em chamados antigos.
* **Gestão de Clientes:** Listagem, edição e exclusão (a exclusão de um cliente deleta seus chamados em cascata).
* **Gestão Global de Chamados:** Acesso total à listagem de tickets do sistema e permissão para alterar status.

### 🔧 Técnico
* **Gestão de Perfil:** Edição de dados pessoais e upload de foto de perfil. *(Opcional: Exclusão de conta)*.
* **Atendimento:** Visualização exclusiva dos chamados atribuídos a ele.
* **Ação em Chamados:** Permissão para alterar o status do ticket (`Em atendimento`, `Encerrado`) e adicionar serviços extras ao chamado em andamento.
* *Restrições:* Não pode criar chamados nem gerenciar clientes.

### 👤 Cliente
* **Gestão de Perfil:** Criação de conta, edição, exclusão e upload de foto de perfil.
* **Abertura de Chamados:** Criação de tickets selecionando a categoria do serviço inicial e escolhendo um técnico disponível no momento.
* **Histórico:** Visualização de todos os chamados abertos por ele, com o valor final dinâmico (Serviço Inicial + Serviços Adicionais incluídos pelo técnico).
* *Restrições:* Não pode editar as informações do chamado após aberto, nem alterar o status.

---

## 📋 Regras de Negócio do Chamado (Ticket)
1.  Todo chamado obrigatoriamente nasce atrelado a 1 Cliente, 1 Técnico e pelo menos 1 Serviço inicial.
2.  Os status possíveis seguem o fluxo: `Aberto` ➡️ `Em atendimento` ➡️ `Encerrado`.
3.  O valor total exibido no chamado é a soma do serviço raiz mais quaisquer serviços extras incluídos durante a execução.

---

## 💻 Como rodar o projeto localmente

### Pré-requisitos
* Node.js (versão 18.x ou superior)
* PostgreSQL rodando localmente (ou via Docker)
* Git

### Passo a Passo

1. **Clone o repositório:**
   ```bash
   git clone [https://github.com/seu-usuario/nome-do-repositorio.git](https://github.com/seu-usuario/nome-do-repositorio.git)
   cd nome-do-repositorio

2. **Instale as dependências:**
   ```bash
   npm install


3. **Configuração de Variáveis de Ambiente:**
   Crie um arquivo `.env` na raiz do projeto e preencha com as suas credenciais:
   
   ```text
# Banco de Dados e NextAuth
   DATABASE_URL="postgresql://usuario:senha@localhost:5432/help_desk?schema=public"
   NEXTAUTH_SECRET="sua-chave-secreta-jwt"
   NEXTAUTH_URL="http://localhost:3000"

   # Provedores de Autenticação OAuth
   GOOGLE_CLIENT_ID="seu-google-client-id"
   GOOGLE_CLIENT_SECRET="seu-google-client-secret"
   GITHUB_ID="seu-github-id"
   GITHUB_SECRET="seu-github-secret"

   # Configuração de E-mail (SMTP)
   EMAIL_SERVER="smtp://usuario:senha@host:porta"
   EMAIL_FROM="noreply@seudominio.com"

4. **Gere o cliente do Prisma e rode as migrations:**

 - npx prisma generate
 - npx prisma migrate dev
 
5. Popule o banco de dados (Seed):
(Este comando insere o usuário Admin, os 3 Técnicos com seus turnos específicos e os 5 Serviços iniciais exigidos pelo projeto).

 - npx prisma db seed

6. Inicie o servidor de desenvolvimento:

 - npm run dev
 - Acesse a aplicação em http://localhost:3000.

🔗 Links Úteis
Deploy da Aplicação: [Insira o link da Vercel aqui]

Desenvolvido com 🩵 por Yuri.