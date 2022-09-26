# YouTube API
<b/>
## Sobre

Website responsivo criado para consumir a API do YouTube, listando os vídeos retornados e podendo exibir determinado vídeo selecionado, além de mostrar seus dados e descrição.

<br />

## Funcionamento

A partir de uma palavra ou um conjunto de palavras inseridas no campo de busca (componente input), a plataforma realiza um requisição em um dos endpoints da API do YouTube que retorna uma lista de canais e vídeos paginada com os resultados. Nesta requisição são enviados como parâmetros de requisiçao o texto inserido no campo de busca, substituindo pelo caractere "+", e uma chave secreta obtida no Google Cloud. O retorno é filtrado para a exclusão dos canais e são exibidos apenas os vídeos contidos na lista. Na resposta da requisição também são retornados tokens de páginas anterior e/ou próxima, os quais são utilizados como parêmetros para a mesma requisição ao passar de página. 

Em cada resultado, é exibido um botão "Ver Mais" que, ao ser clicado, realiza uma requisição para outro endpoint da API do YouTube enviando, como parâmetro de requisição, o videoID para o vídeo selecionado, obtido na requisição anterior, e novamente a chave secreta do Google. Como resposta da requisição, são exibidos o vídeo, incorporado à página pelo elemento HTML "iframe" com o videoID selecionado, seu título, dados estatísticos e sua descrição.

No plano simples do Google Cloud, estes endpoints possuem um limite determinado de resquisições.

<br />

## Links

- <a name="deploy-vercel" href="https://youtube-videos-delta.vercel.app/" target="_blank">Deploy</a>
- <a name="repository" href="https://github.com/sergioothoniel/youtube-videos" target="_blank">Repositório</a>

<br />

## Como Rodar Localmente

- Faça o clone deste repositório para sua máquina local
- Copie o arquivo ".env.example" para a raiz do projeto alterando a extensão para apenas ".env" e insira sua chave secreta, obtida no Google Cloud, na variável <b>REACT_APP_GOOGLE_SECRET_KEY</b> contida neste arquivo
- Execute o comando `yarn` no terminal para instalar as dependências
  
- Executando o comando `yarn start`, o app é instanciado no local host e pode ser acessado pela porta 3000
- Executando o comando `yarn test`, os testes unitários são executados no terminal
- Executando o comando `yarn build`, uma pasta é criado com aquivos HTML, CSS e Javascript para posterior hospedagem

<br />

## Tecnologias

- <a name="react" href="https://pt-br.reactjs.org/" target="_blank">React</a>
- <a name="ts" href="https://www.typescriptlang.org/" target="_blank">TypeScript</a>
- <a name="materialUI" href="https://mui.com/pt/" target="_blank">Material UI</a>
- <a name="styledComponents" href="https://styled-components.com/" target="_blank">Styled-Components</a>

<br/>
<br/>

Desenvolvido por [Sérgio Othoniel](https://github.com/sergioothoniel)
