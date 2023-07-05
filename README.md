# Sistema-de-Login
Um projeto desenvolvido com NodeJS, MongoDB, HTML e CSS.

## Como usar o sistema ?
O projeto é bem simples, para executar na sua máquina é necessário Node, MongoDb em sua porta padrão (27018) a extensão live-server ou parecidos e qualquer Navegador.

Primeiramente será necessário realizar a instalação das dependencias de desenvolvimento que estã contidas no package (criada pelo NPM).

Após isso, execute o comando 'node server.js', e deixe-o executando para deixar o servidor online e escutando. 

Abra o arquivo index.html usando o live-server, é essencial que ele seja executado na porta 5500 para que a política de CORS aja de forma correta.

Se as mensagens :
"
Servidor online na porta: 8080
Connectado ao banco de dados
"
Aparecerem no console após a execução do comando 'node server.js', significa que o programa está rodando corretamente.

Problemas como: Portas erradas (tanto no Mongo, tanto quanto no Client-side), URI errada e instalação incorreta dos pacotes, podem vir a ocasionar erros no programa, atente-se as instruções e faça um teste de registro ao criar um novo usuário e depois realizar o login, para ver o programa na sua real funcionalidade.

## Sobre o sistema
Basicamente é importante que a página com os dados do usuário só possa ser vista por um usuário autenticado(e é essa autentificação que garante q os dados sejam recebidos de forma correta).

Esse sistema conta com uso de tokens, requisições HTTP, uso de banco de dados, criptografia de senhas, criptografia de dados importantes para o servidor(key para jsonwebtoken) e um visual simples para suprir as necessidades do usuário. É um projeto com foco no back-end e realizado inteiramente por Luan Marvin com objetivo apenas de estudo e prática.

### Tecnologias usadas
CORS
EXPRESS
MONGODB
HTML & CSS
Tokens

## Caracteristicas

### Responsividade
![Responsividade](media/screenshots%20and%20images/responsividade.png)

O App é responsivo para as diversas telas, possui um designer simples com intuito de demosntração.

![Desktop](media/screenshots%20and%20images/desktop.PNG)
![Mobile](media/screenshots%20and%20images/mobile.PNG)

### Registro
O sistema conta com um cadastro regido por regras especificas, do qual o usuário precisa de inserir um nome e sobrenome válido, um email válido, e uma senha com ao menos 8 caracteres, sendo ao menso 1 letra maiúscula, 1 letra minúscula, 1 caractere especial e 1 número.

Caso algo esteja fora dos padrões acima, uma mensagem de erro é mostrada ao usuário, melhorando assim a experiência de uso.

![Registro](media/screenshots%20and%20images/desktop-2.PNG)

### Dados
Os dados são registrados no banco de dados MongoDB, e suas informações aparecem como é mostrado abaixo:

![Dados](media/screenshots%20and%20images/mongodb.PNG)

É realizado uma criptografia da senha por ser um campo mais sensível.

### Sessão
As sessões tem um tempo padrão de validade, levando em conta que se o cachê for apagado as informações não serão mais validades e se qualquer outro erro ocorrer, os dados são limpso do cachê e o usuário será informado que a sessão foi encerrada.

![Logout](media/screenshots%20and%20images/logout.PNG)

Se o usuário realizar o login, ele será levado a página do qual mostra apenas seu noem e seu email. Essa página só pode ser acessada se a validação tiver completa, tendo em vista que as informações podem varias de sistema para sistema, esse é apenas um exemplo de cadastro e login, qeu se feito de forma correta apresenta as informações necessárias.