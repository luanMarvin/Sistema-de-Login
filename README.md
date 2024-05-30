# Sistema de Login - ![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg) - ![Google Chrome](https://img.shields.io/badge/Google%20Chrome-4285F4?style=for-the-badge&logo=GoogleChrome&logoColor=white) ![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white) ![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white) ![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)

<p align="center">
  <img src="https://i.imgur.com/HtC9X0B.png" alt="Sistema de Login" />
</p>
<h1 align="center">Sistema de Login</h1>

# PT-BR

## Descrição

Esta aplicação gerencia logins, podendo criar usuários, realizar mudanças nas credenciais de login e autenticar os usuários.
O objetivo desta aplicação é apenas para fins de estudo, mas seu uso é livre para outras aplicações.
Para utilizar esta aplicação, siga os passos descritos abaixo. Mais informações estão disponíveis em outras seções e, caso necessário, você pode entrar em contato com o desenvolvedor desta aplicação, dono desta página no GitHub.

## Instalação
### Programa extra
Para usar a aplicação, é necessário ter o banco de dados ``MongoDB Community Server`` ou outra versão do ``MongoDB``.
Baixe pelo link: ``https://www.mongodb.com/try/download/community``.

Esta aplicação precisa da porta específica usada pelo ``MongoDB`` para funcionar corretamente. Caso tenha alguma dúvida, utilize o padrão recomendado pelo próprio ``MongoDB``

### Download
Para fazer o download da aplicação, vá até a página do GitHub e realize o download de forma convencional ou pelo próprio Git, com o comando:

```bash
git clone https://github.com/luanMarvin/Sistema-de-Login.git
```

Após o download, vá até o diretório do arquivo e verá as pastas 'client' e 'server'.

### Server

O servidor gerencia a parte lógica do sistema, realizando a gravação de dados no servidor local.

Inicialmente, crie um arquivo chamado ``'.env'`` na pasta ``server``, com o seguinte código:

```jsx
URL="http://127.0.0.1:8081"
URI="mongodb://127.0.0.1:27017/sistema-de-login"
```
Informações importantes:
- A variável 'URL' representa o local que a política de CORS irá liberar o acesso. É necessário que ela seja igual ao endereço em que o servidor está sendo executado. Para evitar qualquer erro indesejado, utilize a rota correta (como descrito neste passo a passo).
- A variável 'URI' deve usar o padrão do MongoDB (banco de dados instalado previamente). Caso a porta do seu banco de dados não seja a mesma representada acima ``(27017)``, você pode substituir a URI por: ``URI="mongodb://127.0.0.1:[PORT]/sistema-de-login"`` (troque ``'[PORT]'`` pelo número da porta do ``MongoDB``, sem os colchetes).


### Client

Esta parte é responsável pela interface visual do programa, construída com tecnologias básicas de CSS e HTML. Nela, é possível inserir as informações de registro para criação de um novo usuário ou inserir as credenciais de login criadas previamente para que o servidor faça a autenticação.

Para inicializar a parte do Client, é possível usar o editor de código ``VS Code``, que disponibiliza o uso da extensão ``Live Server`` de maneira fácil.

Caso não tenha esta aplicação ou não deseje fazer o download da mesma, é possível acessar o servidor pelo prompt de comando utilizando a ferramenta npm para fazer o download do pacote ``http-server`` com o comando:
```bash
npm i -g http-server
```

Logo após isso execute o pacote ``http-server`` pelo npm:
```bash
http-server -p 5500 -o ./
```
(Lembre-se que o comando é necessário ser realizado dentro da propria pasta 'client', do contrário o acesso pelo próprio browser auxilia o acesso a pasta em questão.)

sso abrirá o browser e mostrará a página inicial da aplicação, que conta com um formulário de criação de um novo perfil. A porta descrita no código é a mesma que foi utilizada no arquivo ``.env``, por isso é necessário seguir fielmente as instruções dadas aqui.

Caso queira desabilitar o CORS, é possivel usar o código abaixo:

```jsx
URL=""
URI="mongodb://127.0.0.1:27017/sistema-de-login"
```

## Uso

### Criação de usuário

As informações necessárias para a criação de um novo perfil são: 
- Primeiro Nome
- Sobrenome
- E-mail
- Senha (Necessário ter 8 digitos, com ao menos 1 sendo uma letra maiuscula, 1 letra minuscula, 1 número e 1 caractere especial)

Na página principal de registro da aplicação, insira os dados nos campos acima e clique em ``Criar Conta``.

Após a criação da conta, é possível ir à página de Login e inserir o email e a senha digitados previamente. Você será levado a uma página com seu nome, acessível apenas por usuários autenticados. Caso deseje, pode fazer o logoff pelo botão. Leve em consideração que o login só estará disponível durante 2 horas, e após esse prazo será necessário inserir as credenciais novamente.

## Funcionalidades

### Criptografia

Esta aplicação conta com um sistema de criptografia que esconde os dados dos usuários, de modo que, quando gravadas no banco de dados, todas as senhas aparecem criptografadas (ou seja, não é possível obter a senha do usuário pelo banco de dados, garantindo assim um sistema mais seguro).

### Responsividade

Esta aplicação pode ser executada pela web em vários tipos de dispositivos. Se o servidor estiver online, é possível usar o ``IP`` da máquina.

## Contribuição

Para contribuir com esse projeto é necessário entrar em contato com o administrador do projeto, por se tratar de um projeto de estudo, alterações serão bem-vindas para fins de melhoria.

## Licença

Esse projeto é [MIT licensed](./LICENSE).

# EN

## Description
This application manages logins, allowing the creation of users, changes in login credentials, and user authentication. The purpose of this application is purely for study, but its use is free for other applications. To use this application, follow the steps described below. More information is available in other sections, and if necessary, you can contact the developer of this application, the owner of this page on GitHub.

## Installation
### Additional Program
To use the application, you need to have the ``MongoDB Community Server`` database or another version of ``MongoDB``. Download it from the link: ``https://www.mongodb.com/try/download/community``.

This application requires the specific port used by MongoDB to function correctly. If you have any doubts, use the standard recommended by MongoDB itself.

### Download
To download the application, go to the GitHub page and download it conventionally or via Git with the command:

```bash
git clone https://github.com/luanMarvin/Sistema-de-Login.git
```

After downloading, go to the file directory, and you will see the 'client' and 'server' folders.

### Server
The server manages the logical part of the system, recording data on the local server.

Initially, create a file called ``'.env'`` in the ``'server'`` folder with the following code:

```jsx
URL="http://127.0.0.1:8081"
URI="mongodb://127.0.0.1:27017/sistema-de-login"
```

Important information:

- The 'URL' variable represents the location that the CORS policy will allow access to. It must be the same as the address where the server is running. To avoid any undesired errors, use the correct route (as described in this step-by-step guide).
- The 'URI' variable should use the MongoDB standard (database installed previously). If the port of your database is not the same as above ``(27017)``, you can replace the URI with: ``URI="mongodb://127.0.0.1:[PORT]/sistema-de-login"`` (replace ``'[PORT]'`` with the ``MongoDB`` port number, without brackets).

### Client
This part is responsible for the program's visual interface, built with basic CSS and HTML technologies. Here, you can enter the registration information to create a new user or enter the previously created login credentials for the server to perform authentication.

To initialize the Client part, you can use the ``VS Code`` editor, which provides the ``Live Server`` extension easily.

If you don't have this application or don't want to download it, you can access the server via the command prompt using npm to download the http-server package with the command:

```bash
npm i -g http-server
``` 

After that, execute the ``http-server`` package via npm:

```bash
http-server -p 5500 -o ./
```

(Remember that the command must be executed inside the 'client' folder, otherwise accessing the folder through the browser will facilitate access to the folder in question.)

This will open the browser and show the application's home page, which contains a form for creating a new profile. The port described in the code is the same used in the .env file, so it is necessary to follow the instructions given here faithfully.

If you want to disable CORS, you can use the code below:

```jsx
URL=""
URI="mongodb://127.0.0.1:27017/sistema-de-login"
```

### Usage
User Creation
The necessary information to create a new profile is:

- First Name
- Last Name
- Email
- Password (must be 8 characters long, with at least 1 uppercase letter, 1 lowercase letter, 1 number, and 1 special character)
On the main registration page of the application, enter the data in the fields above and click on ``'Criar Conta'``.

After creating the account, you can go to the Login page and enter the previously entered email and password. You will be taken to a page with your name, accessible only to authenticated users. If you wish, you can log off using the button. Note that the login will only be available for 2 hours, and after this period, it will be necessary to enter the credentials again.

## Features
### Encryption
This application features an encryption system that hides user data. When stored in the database, all passwords appear encrypted (i.e., it is not possible to obtain the user's password from the database, thus ensuring a more secure system).

### Responsiveness
This application can be run on the web on various types of devices. If the server is online, you can use the machine's ``IP``.

## Contribution
To contribute to this project, you need to contact the project administrator. Since this is a study project, changes are welcome for improvement purposes.

## License
This project is [MIT licensed](./LICENSE).