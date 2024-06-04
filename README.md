# Sistema Verdes Mares: teste prático para Frontend Develop

Olá e bem-vindo ao desafio de Frontend para o desenvolvimento do nosso novo produto de notícias! Neste teste, você terá a oportunidade de demonstrar suas habilidades e criatividade na construção de uma aplicação web que proporcionará uma experiência de leitura de notícias fluida e envolvente.

### Objetivo
Desenvolver uma aplicação de notícias que exiba as últimas notícias sobre technology em ordem de publicação, da mais recente para a mais antiga e leitura do artigo. Além disso, a aplicação deve incluir um sistema de busca para que os usuários encontrar o artigo baseado no title e author do seu interesse. 

### O desafio
Você irá construir a nossa próxima aplicação de listagem e busca de notícias usando a API do NewsAPI. É uma aplicação simples, onde iremos listar as últimas notícias publicadas e buscar por um determinado título ou author para termos acesso a leitura desejada.
Nossa idea da interface é listar as últimas 20 notícias publicadas e ordenadas por data da publicação, onde deverá exibir da mais recente para mais antiga. Além da listagem das notícias, gostaríamos de mostrar algumas informações sobre a elas, como o image, título, categoria, author e data da publicação. Esses dados você conseguirá extrair da API do NewsAPI.
Além da listagem, devemos ter um campo de busca no centro da tela, que ao ser acionado com o título do artigo ou author, retornaremos uma listagem com algums notícias relacionadas ao termo da busca. 

### Instruções
1. Crie um fork deste repositório e desenvolva sua solução nele.
2. Utilize o README do seu repositório para documentar sua abordagem, decisões de design, tecnologias utilizadas e instruções para execução do projeto.
3. Ao concluir o desafio, envie-nos o link do seu repositório para revisão no email: desenvolvimento@verdesmares.com.br

#### Dicas importantes

- Construímos alguns requisitos necessários para o seu desenvolvimento. 
- Você também deverá seguir o nosso protótipo através desse [[ LINK FIGMA]]
- Você pode gerar seu próprio tokens para consumir a NewsAPI, mas se quiser usar a nossa, segue ela: 29eae89ffe6d4d589c9c8f24f7ebab73
- Leia atentamente a documentação antes de implementar, você encontrará mais informações aqui: https://newsapi.org/docs 

### ⏲️ Prazo

Não definimos um prazo rígido para a conclusão do teste, pois valorizamos mais a qualidade do trabalho do que a velocidade. No entanto, acreditamos que este desafio pode ser concluído em cerca de 48 horas de trabalho. Caso não consiga, não tem problema. Envie o teste com o checklist das tarefas concluídas.
Estamos ansiosos para ver sua solução e esperamos que você aproveite este desafio para demonstrar seu talento e paixão pelo desenvolvimento frontend. Boa sorte!

## Requisitos
### Requisitos Funcinais
- [ ] Deve ser possível listar as notícias mais recentes em ordem cronológica;
- [ ] Deve ser possível listar as notícias com title, description, author, image, category e source;
- [ ] Deve ser possível acessar a notícia pelo slug;
- [ ] Deve ser possível o usuário buscar notícias desejada pelo título;
- [ ] Deve ser possível o usuário buscar notícia por autor;
- [ ] Deve ser possível o usuário ler uma notícia;
- [ ] Deve ser necessário salvar a notíca lida
      
### Regras de negócio
- [ ] O usuário não deve poder se cadastrar com um e-mail duplicado;
- [ ] O usuário não pode ler mais que 2 vezes a mesma notícia;
- [ ] O usuário não pode ler uma notícia com o JavaScript desabilitado;
- [ ] O usuário não pode ler uma notícia em modo anônimo;
- [ ] O usuário não poderá acessar uma página de categoria;
- [ ] O usuário não poderá acessar uma página de author;
- [ ] O usuário deverá ser redirecionado para página principal quando tentar acessar a página de categoria;
      
### Requisitos não-funcionais
- [ ] O id da notícia lida precisam estar persistidos em localStorage;
- [ ] A lista de notícias deve estar paginadas com 20 itens por página;
- [ ] A lista de notícias deve exibir as últimas notícias em ordem cronológica;
- [ ] O usuário com JavaScript desabilitado no Browser deverá ser direcionado para page-block;
- [ ] O usuário em aba anônimo no Browser deverá ser direcionado para page-block;
- [ ] O usuário com mais de 10 leituras diferentes deverá ser direcionado para page-block;

