# Autenticação com NextAuth, Prisma e Next.js 15

Neste mini projeto, pude mergulhar na tech Next-auth, aprendi implementar a autenticação em um hipotético SaaS de Livros de Programação. Usei o NextAuth para gerenciar a autenticação e o Prisma para a interação com o banco de dados, enquanto usei a frameworks o Next.js 15. O design já está preparado, e o foco foi na implementação das funcionalidades sem a necessidade de modificar muito na interface.

## 🔨 Requisitos

- **Faça a instalação e o setup do NextAuth v5 (a última versão é importante).**
  - O único provedor que eu usei neste Mini Projeto é o `Credentials` (login com email e senha). 

- **Fiz a criação e o gerenciamento da minha base de dados ( mysql ) usando o Prisma**
  - Eu apenas precisei de uma tabela de usuários( users )
	
    > 👀 **Dicas:**
    > - Consulte a documentação do NextAuth para entender como configurar o Prisma em conjunto com NextAuth.

- **Funcionalidade de registrar usuários usando a tela de cadastro**
  - Usei, na medida do possível, _server actions_.
  - Um usuário deverá possuir _nome_, _email_ e _senha_.
  - A senha deverá ser criptografada antes de ser salva na base de dados.
  - A tela de cadastro não é acessível a usuários logados (redireciona direitamente ao dashboard)

      > 👀 **Dicas:**
      > - O NextAuth auxilia apenas no login do usuário - a implementação do cadastro de usuário deverá ser feita por você.

- **Funcionalidade de logar usuários usando a tela de login**
  - Usei, na medida do possível, _server actions_.
  - Ao logar,o usuário é redirecionado para a tela de dashboard.
  - A tela de login não é acessível a usuários logados (é redirecionado ao dashboard)

- **Navegação e renderização condicional**
  - Na home, quando o usuário esta logado, o botão da Navbar +e de `Dashboard`. Quando o usuário estiver deslogado, o botão é de `Login`.
  - Um usuário deslogado consegue acessar a Dashboard.
  - Um usuário logado não tem mais acesso as telas de login e cadastro. 

## 🔨 Implementações futuras

- Implemente uma página de perfil onde o usuário poderá visualizar e editar suas informações como _nome_ e _senha_. 

## 🎨 Design Sugerido

O layout está no Figma e já está implementado no projeto. Você não precisará implementá-lo. 

### Figma

🔗 [Link do design](https://www.figma.com/community/file/1431066927390390144/mini-projeto-saas-autenticacao-com-nextauth-prisma-e-next-js-15)

### Com este mini projeto eu consegui praticar:

#### Next.js

- Conhecimentos sobre a configuração de páginas e rotas dinâmicas.

#### NextAuth

- Aprender sobre autenticação em aplicações Next.js.
- Integração do NextAuth com Prisma e base de dados. 

#### Prisma

- Gerenciar banco de dados de forma eficiente e intuitiva.
- Criação de modelos e migrações com Prisma.


### Pré requisitos para este projetos:

- Conhecimentos em JavaScript, React e NextJs.
