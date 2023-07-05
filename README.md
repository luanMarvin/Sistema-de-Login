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