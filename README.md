# Plataforma de Video - Feito com base do Ignite 2.0 2022

- Tela login 

![](https://github.com/arcorreiaa/login-video-platform/blob/master/src/assets/print-login.png)

- Tela home parte de cima 

![](https://github.com/arcorreiaa/login-video-platform/blob/master/src/assets/print-home-top.png)

- Tela home parte de baixo 

![](https://github.com/arcorreiaa/login-video-platform/blob/master/src/assets/print-home-bottom.png)


## Sobre o projeto

A aplicação Event Platform desenvolvida durante a semana do evento [Ignite Lab 02](https://lp.rocketseat.com.br/inscricao/ignite-lab) realizado pela Rocketseat. Projeto falta ser finalizado a parte Mobile que ainda estou finalizando. Esse projeto será uma plataforma web de eventos feita com:

- [React](https://pt-br.reactjs.org/)
- [Vite](https://vitejs.dev/)
- [Typescript](https://www.typescriptlang.org/)
- [GraphQL](https://graphql.org/)
- [GraphCMS](https://graphcms.com/)
- [Apollo](https://www.apollo.io/?gspk=dGVycmFsb2dpYzc5MDU&utm_gspartnerkey=terralogic7905)
- [PostCSS](https://postcss.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Figma](https://www.figma.com)
- [GraphQL Code Generatpr](https://www.graphql-code-generator.com/)
- 

# O que são essas tecnologias?

- Reactjs - React faz com que a criação de UIs interativas seja uma tarefa fácil. Crie views simples para cada estado na sua aplicação, e o React irá atualizar e renderizar de forma eficiente apenas os componentes necessários na medida em que os dados mudam. <a href="https://pt-br.reactjs.org/" alt="ir para o site oficial do REACTJS"> Saber mais<a>

- Vite - é uma ferramenta de construção que visa fornecer uma experiência de desenvolvimento mais rápida e enxuta para projetos web modernos. É composto por duas partes principais:
 1 - Um servidor de desenvolvimento que fornece aprimoramentos de recursos avançados em módulos ES nativos , por exemplo, Hot Module Replacement (HMR) extremamente rápido .
 2 - Um comando de compilação que agrupa seu código com Rollup , pré-configurado para gerar ativos estáticos altamente otimizados para produção. <a href="https://vitejs.dev/guide/" alt="ir para o site oficial"> Saber mais<a>

- Graphql -  GraphQL é uma linguagem de consulta para APIs e um tempo de execução para atender a essas consultas com seus dados existentes. O GraphQL fornece uma descrição completa e compreensível dos dados em sua API, oferece aos clientes o poder de solicitar exatamente o que eles precisam e nada mais, facilita a evolução de APIs ao longo do tempo e permite ferramentas de desenvolvedor poderosas. <a href="https://graphql.org/" alt="ir para o site oficial"> Saber mais<a>

- Apollo - O Apollo rastreia seus esquemas GraphQL em um registro para criar uma fonte central de verdade para tudo em seu supergrafo.  <a href="https://www.apollographql.com/" alt="ir para o site oficial"> Saber mais<a>

- GraphCMS - O GraphCMS oferece APIs de conteúdo GraphQL instantâneas para criar, enriquecer, unificar e entregar seu conteúdo entre plataformas. <a href="https://graphcms.com/" alt="ir para o site oficial"> Saber mais<a>

- CodeGen -  Gerador de código do seu esquema GraphQL. Consegue gerar código de seu esquema e operações do GraphQL com uma CLI simples<a href="https://www.graphql-code-generator.com/" alt="ir para o site oficial"> Saber mais<a>

- Tailwind - Uma estrutura CSS de utilidade em primeiro lugar com classes como , , e que podem ser compostas para construir qualquer design, diretamente em sua marcação. <a href="https://tailwindcss.com/" alt="ir para o site oficial"> Saber mais<a>

- Phosphor React - Phosphor é uma família de ícones flexível para interfaces, diagramas, apresentações <a href="https://phosphoricons.com/" alt="ir para o site oficial"> Saber mais<a>

- React Router Dom -  O React Router v6 leva os melhores recursos das versões anteriores - e seu projeto irmão, Reach Router - em nosso menor e mais poderoso pacote até agora. <a href="https://reactrouter.com/" alt="ir para o site oficial"> Saber mais<a>

- TyperScript - O TypeScript adiciona sintaxe adicional ao JavaScript para oferecer suporte a uma integração mais estreita com seu editor . Detecte erros no início do seu editor. <a href="https://www.typescriptlang.org/" alt="ir para o site oficial"> Saber mais<a>

## Instalação e uso

```bash
# Clone o repositório
git clone git@github.com:arcorreiaa/login-video-platform.git

# Acesse a pasta do projeto
cd login-video-platform

# Instale as dependências
npm install or yarn 

# Pegar as chaves da api e token no GraphCMS
  Clonar o projeto pelo GraphCMS (Precisa criar uma conta) - https://app.graphcms.com/ea7c5fc11fa84d059673720d22b4faf5/master
  
# Pegar api 
  Depois de criar sua conta e clonar o projeto vá para Settings/API Access/Endpoints, 
  o endpoint que voce vai precisar estár em CONTENT API (url finalizada com /master)
  
# Toker de autenticação
  Para pegar o token de atutenticação, vá para Settings/API Access/Permanent Auth Tokens,
  se voce clonou meu projeto, provavelmente já está com um criado, porém voce pode apagar e criar um novo.

# Criando e adicionando a api e token em variavéis de ambiente
  Ao ter em mãos o endpoint da api e o token de atutenticação, 
  crie na raiz do projeto um arquivo .evn.local com o seguinte conteúdo: 
  VITE_API_URL="seu_endpoint_aqui"
  VITE_API_ACCESS_TOKEN="seu_token_aqui"

# Adicionar o .env.local no .gitignore
  Adicione dentro do .gitignore o .env.local

# Execute a aplicação
npm run dev or yarn start

# O servidor inciará na porta 3000 e o link para acesso é http://localhost:3000
```


## Design

[Acesse em Figma](https://www.figma.com/community/file/1120711251998877938)

## Licença

Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](./LICENSE.md) para mais detalhes.
