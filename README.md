# 🛒 Sistema de Vendas - Next.js

[![Next.js](https://img.shields.io/badge/Next.js-12.1.4-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-18.0.0-blue?style=for-the-badge&logo=react)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-4.6.3-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Bulma](https://img.shields.io/badge/Bulma-0.9.3-00d1b2?style=for-the-badge&logo=bulma)](https://bulma.io/)
[![Sass](https://img.shields.io/badge/Sass-1.49.11-cc6699?style=for-the-badge&logo=sass)](https://sass-lang.com/)

> Sistema de vendas desenvolvido com Next.js, TypeScript e Bulma CSS Framework

## 📋 Sumário

- [Sobre o Projeto](#-sobre-o-projeto)
- [Tecnologias Utilizadas](#-tecnologias-utilizadas)
- [Estrutura do Projeto](#-estrutura-do-projeto)
- [Pré-requisitos](#-pré-requisitos)
- [Instalação](#-instalação)
- [Scripts Disponíveis](#-scripts-disponíveis)
- [Configurações](#-configurações)
- [Padrões de Projeto](#-padrões-de-projeto)
- [Desenvolvimento](#-desenvolvimento)

## 🎯 Sobre o Projeto

Sistema de vendas desenvolvido com Next.js 12, utilizando TypeScript para tipagem estática e Bulma CSS Framework para estilização. O projeto implementa uma arquitetura modular com componentes reutilizáveis e API routes do Next.js.

## 🛠 Tecnologias Utilizadas

### Core
- **Next.js 12.1.4** - Framework React para produção
- **React 18.0.0** - Biblioteca JavaScript para interfaces
- **TypeScript 4.6.3** - Superset JavaScript com tipagem estática

### Estilização
- **Bulma 0.9.3** - Framework CSS moderno e responsivo
- **Sass 1.49.11** - Pré-processador CSS

### HTTP Client
- **Axios 0.26.1** - Cliente HTTP para requisições

### Desenvolvimento
- **ESLint 8.12.0** - Linter para JavaScript/TypeScript
- **@types/node, @types/react, @types/react-dom** - Tipagens TypeScript

## 📁 Estrutura do Projeto

```
src/
├── app/                    # App Router (Next.js 13+)
├── components/             # Componentes reutilizáveis
│   ├── common/            # Componentes comuns
│   ├── layout/            # Componentes de layout
│   └── produtos/          # Componentes específicos
├── pages/                 # Pages Router (Next.js)
│   ├── api/               # API Routes
│   └── cadastros/         # Páginas de cadastro
├── styles/                # Arquivos de estilo
│   ├── globals.css        # Estilos globais
│   └── Home.module.css    # Módulos CSS
```

## ⚙️ Pré-requisitos

- **Node.js** (versão 14 ou superior)
- **npm** ou **yarn** (gerenciador de pacotes)
- **Git** (controle de versão)

## 🚀 Instalação

1. **Clone o repositório**
   ```bash
   git clone <url-do-repositorio>
   cd vendas-nextjs
   ```

2. **Instale as dependências**
   ```bash
   yarn install
   # ou
   npm install
   ```

3. **Execute o projeto em desenvolvimento**
   ```bash
   yarn dev
   # ou
   npm run dev
   ```

4. **Acesse o projeto**
   ```
   http://localhost:3000
   ```

## 📜 Scripts Disponíveis

| Comando | Descrição |
|---------|-----------|
| `yarn dev` | Inicia o servidor de desenvolvimento |
| `yarn build` | Gera build de produção |
| `yarn start` | Inicia o servidor de produção |
| `yarn lint` | Executa o linter ESLint |

## ⚙️ Configurações

### TypeScript (`tsconfig.json`)
- **Target**: ES5
- **Module**: ESNext
- **JSX**: Preserve
- **Strict Mode**: Habilitado
- **Base URL**: `src/`

### Next.js (`next.config.js`)
- **React Strict Mode**: Habilitado
- **Configurações padrão** para otimização

### ESLint (`.eslintrc.json`)
- **Configuração Next.js** padrão
- **Regras de linting** para TypeScript

## 🏗 Padrões de Projeto

### Estrutura de Componentes
- **Componentes funcionais** com hooks React
- **TypeScript** para tipagem estática
- **Módulos CSS** para estilos isolados

### Roteamento
- **Pages Router** (Next.js tradicional)
- **API Routes** para backend
- **Estrutura hierárquica** de páginas

### Estilização
- **Bulma CSS Framework** para componentes
- **Sass** para customizações
- **CSS Modules** para estilos específicos

### Arquitetura
- **Separação de responsabilidades**
- **Componentes reutilizáveis**
- **Layout modular**

## 💻 Desenvolvimento

### Estrutura de Páginas
- **Home** (`/`) - Página inicial
- **Cadastros** (`/cadastros`) - Módulo de cadastros
- **Produtos** (`/cadastros/produtos`) - Gestão de produtos

### API Routes
- **Hello** (`/api/hello`) - Endpoint de exemplo

### Componentes
- **Layout** - Estrutura base da aplicação
- **Menu** - Navegação principal
- **Produtos** - Componentes específicos

---

## 👨‍💻 Autor

<div align="center">

![Full Stack Developer](https://img.shields.io/badge/Full%20Stack-Developer-blue?style=for-the-badge&logo=developer)
![Next.js](https://img.shields.io/badge/Next.js-Expert-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-Developer-blue?style=for-the-badge&logo=typescript)
![React](https://img.shields.io/badge/React-Developer-61dafb?style=for-the-badge&logo=react)

**by [Rodolfo M. F. Abreu](https://github.com/salamandery)**

[![GitHub](https://img.shields.io/badge/GitHub-rodolfomfabreu-black?style=for-the-badge&logo=github)](https://github.com/salamandery)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Rodolfo%20Abreu-blue?style=for-the-badge&logo=linkedin)](https://linkedin.com/in/rodolfo-marques-ferreira-de-abreu/)
[![Portfolio](https://img.shields.io/badge/Portfolio-Website-green?style=for-the-badge&logo=globe)](https://seu-portfolio.com)

</div>

---

<div align="center">

**🛒 Desenvolvido com ❤️ usando Next.js e TypeScript 🛒**

[![Made with Love](https://img.shields.io/badge/Made%20with-Love-red.svg?style=for-the-badge&logo=heart)]()
[![Next.js](https://img.shields.io/badge/Powered%20by-Next.js-black.svg?style=for-the-badge&logo=next.js)]()
[![TypeScript](https://img.shields.io/badge/Built%20with-TypeScript-blue.svg?style=for-the-badge&logo=typescript)]()

</div>

> Sistema de vendas moderno e escalável com Next.js e TypeScript
