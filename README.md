# Mini-curso Frontend

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Durante este minicurso faremos um site representando a lista de produtos de um e-commerce utilizando HTML, CSS, JQuery e Bootstrap.

## Pré-requisitos
   * Node.js (4.3.1+)

## Primeiros Passos

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Clone este repositório e acesse o branch `base_project` com os seguintes comandos:

``` sh
$ git clone https://github.com/ltiaunesp/Front-Minicurso.git
$ git checkout base_project
```

## 1. Criando o site estático
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Um site completo é normalmente composto por `HTML`, `CSS` e `Javascript`.

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;O `HTML` é responsável por exibir o conteúdo baseado na sua estrutura.

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Com o `CSS` é possível personalizar e aplicar estilos na exibição desse conteúdo e estrutura.

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Utilizando o `Javascript` conseguimos manipular, durante a exibição do site, o seu contéudo, estilo e estrutura.

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Para incorporar o CSS e Javascript em seu HTML é necessário a inserção das tags `link` e `script` conforme o exemplo a seguir no seu arquivo `index.html`:

``` html
<!DOCTYPE html>
<html>
  <head><!-- Aqui deve ser inserido todas e quaisquer tags de inicialização do seu site -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, user-scalable=no">  <!-- Meta-tag para definição virtual do tamanho da tela -->
    <script src="scripts/main.js" type="text/javascript" charset="utf-8"></script>
    <link rel="stylesheet" href="styles/style.css" type="text/css" charset="utf-8">
    <title>LTIA-Commerce</title>
  </head>
  <body><!-- Aqui devem ser inseridas as tags para estruturar seu site -->
    <!--LTIA-Commerce-->
  </body>
</html>
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Existem frameworks como `JQuery` e `Bootstrap` que servem para facilitar e agilizar o desenvolvimento de sites. Neste projeto utilizaremos os dois agora mencionados e podem ser baixados nos seguintes links [JQuery](http://jquery.com/) e [Bootstrap](http://getbootstrap.com/).

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Para incluirmos estes frameworks nos projetos, com o branch `base_project`, abra o arquivo `index.html` e insira o seguinte código dentro da tag `head` antes dos nossos arquivos `main.js` e `style.css`

``` html
<script src="scripts/jquery.js" type="text/javascript" charset="utf-8"></script>
<script src="scripts/bootstrap.min.js" type="text/javascript" charset="utf-8"></script>
<link rel="stylesheet" href="styles/yeti.min.css" type="text/css" charset="utf-8">
```


&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Neste projeto foi utilizado o tema [Yeti](https://bootswatch.com/yeti/) baseado em Bootstrap, mas nada impede o uso de outros temas, que podem ser encontrados no site [BootsWatch](https://bootswatch.com/yeti/), ou o Bootstrap puro.

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; A partir de agora modificaremos apenas o conteúdo dentro da tag body. Todo site necessita de uma `Barra de Navegação` e por questões de semântica, utilizamos a tag `nav` para implementação da mesma. Utilizando o Bootstrap podemos criar uma barra de navegação da seguinte forma:

``` html
<header> <!-- Container do cabeçalho do site -->
  <nav class="navbar navbar-default"> <!-- Container da barra de navegação -->
    <div class="container-fluid"> <!-- Container com 100% de largura -->
      <div class="navbar-header"> <!-- Container da logo ou titulo do site -->
        <a class="navbar-brand" href="index.html">LTIA-Commerce</a> <!-- Link para a página inicial -->
      </div>
      <div class="collapse navbar-collapse"><!-- Container da lista de links -->
        <ul class="nav navbar-nav"> <!-- Lista de links da barra de navegação -->
          <li class="active"><a href="#">Produtos</a></li>
          <li><a href="#">Link desativado</a></li>
          <li><a href="#">Link desativado</a></li>
        </ul>
      </div>
    </div>
  </nav>  
</header>
```
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Durante a navegação em um site complexo, cheio de páginas e afins, os usuários acabam se perdendo. Então, é interessante a utilização de da `Navegação Estrutural` ou `Breadcrumbs` (Navegação por migalhas de pão). Utilizando o Bootstrap podemos implementar inserindo o seguinte código dentro de nossa tag `header`:

``` html
<nav class="navbar-breadcrumb"> <!-- Container da breadcrumb -->
  <ul class="breadcrumb"> <!-- implementação da breadcrumb do Bootstrap -->
    <li><a href="#">Página Inicial</a></li> <!-- links -->
    <li class="active">Produtos</li> <!-- Página atual -->
  </ul>
</nav>
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Se verificarmos como ficou nossa Breadcrumb, veremos que ela está `full-width` assim como a nossa `navbar`. Para melhorar isso, dentro do arquivo `styles/style.css`, adicione o seguinte código:

``` css
.navbar-breadcrumb{ /* Seletor do container da breadcrumb */
  padding: 0 20px; /* Atributo de margem interna na vertical e horizontal */
}
```
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Este código inseriu uma margin interna à esquerda e direita de `20px`.

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Depois da navegação deve-se focar no conteúdo da página. Dentro de uma página de produtos devemos ter um `Menu de Categorias` e uma `Lista de Produtos`.

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Para implementar o Menu de Categorias, insira o seguinte código depois da tag `header`.
``` html
<section class="body-page grid"> <!-- Container do conteúdo da pagina -->
  <aside class="category-products"> <!-- Container do menu de categorias -->
    <div class="panel panel-default">
      <div class="panel-heading">Categorias</div> <!-- titulo -->
      <div class="list-group"> <!-- lista -->
        <a href="#" class="list-group-item">LTIA Gourmet</a> <!-- item -->
        <a href="#" class="list-group-item">Nodes</a>
        <a href="#" class="list-group-item active">Develop Spammers</a> <!-- item ativo -->
      </div>
    </div>
  </aside>
</section>
```

Para deixar o menu alinhado a esquerda, sem ocupar a tela inteira, adicione o seguinte código ao `style.css`

``` css
.category-products, .list-products{
  display: inline-block;
}

.category-products{
  min-width: 300px;
  vertical-align: top;
}
```

Agora implementando a `Lista de Produtos`:

``` html
<div class="list-products"> <!-- Container da lista -->
  <h1 class="list-products-title">Develop Spammers</h1>

  <div class="card panel panel-default"> <!-- Container de produto -->
    <div class="panel-heading"> <!-- container img -->
      <img src="assets/slack.jpg">
    </div>
    <div class="panel-body"> <!-- container nome -->
      Spam de Node
    </div>
  </div>
</div>
```
Para cada produto será necessário adicionar outro container de produto. Tendo apenas a estrutura dos produtos, podemos aprimorar a interface adicionando o seguinte código css:

``` css
.list-products{
  padding: 0 30px;
  width: calc(100vw - 330px);
  clear:right;
}

.list-products .list-products-title{
  margin-top: -4px;
}

.list-products .card.panel{
  display: inline-block;
  margin-right: 20px;
}

.list-products .card.panel, .list-products .card.panel .panel-heading img{
  width:300px;
}

.list-products .card.panel .panel-heading{
  padding:0;
}

.list-products .card.panel .panel-heading img{
  height:150px;
}
```

### Visualizando o resultado

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;O resultado desta etapa pode ser observado no branch `static_project`:

``` sh    
$ git checkout static_project
```


## 2. Buscando informações externas

Até agora, construímos apenas a interface gráfica do site, ainda precisamos buscar os dados dinamicamente de algum lugar e mostrar as informações. Para isso utilizaremos o `JQuery`, um framework Javascript comumente utilizado para animações, que facilita a manipulação do `DOM` e da consulta `HTTP` via `ajax`.

A partir deste ponto, será necessário a utilização de um servidor web por causa dos algoritmos de segurança dos navegadores, que não deixam sites pegarem arquivos de seu computador. Para isso:

``` sh
$ npm install -g http-server
$ http-server /path/to/project
```

Dentro da pasta `scripts`, crie um novo arquivo chamado `data.json` com o conteúdo a seguir, este arquivo providenciará os dados do seu site.
``` json
{
  "result": [
    {
      "name": "Spam de Node"
    },
    {
      "name": "Spam de Angular"
    },
    {
      "name": "Spam do slackbot"
    },
    {
      "name": "Spam de LTIA GOURMEET"
    },
    {
      "name": "Spam do Paparvore"
    }
  ]
}
```

Criado o arquivo de dados, buscaremos o dado dele a partir da nossa página. Abra o `console` de seu `Browser`, muito provavelmente com o comando `ctrl`+`shift`+`i`. Nele você encontrará uma mensagem escrita `Olá, mundo`, feita pelo método `console.debug` no arquivo `main.js`.

Abra o arquivo `main.js` e insira o seguinte código:

``` js
$(document).ready(function(){
  $.ajax({
    url: 'scripts/data.json', // URL que fornecerá o dado
    method: "GET" // Verbo HTTP que será utilizado
  }).done(function(data){ // Listener, ou callback, da nossa consulta
    console.log(data); // Mostra os dados adquiridos na consulta
  })
})
```

Com este código, conseguimos os dados de produtos de uma fonte externa, agora é necessário inserir este conteúdo no site. Para isso devemos primeiro remover todos os `containers de produto` na `index.html`, criar uma variável que servirá de template para nossos produtos, e depois inflar o produto no `container de produtos`. O código final ficará parecido com isto:

``` js
// implementação es5:
var produtoTemplate = '<div class="card panel panel-default"><div class="panel-heading"><img src="assets/slack.jpg"></div><div class="panel-body"><<product_name>></div></div>'

// implementação es6:
// const produtoTemplate = `<div class="card panel panel-default">
//   <div class="panel-heading">
//     <img src="assets/slack.jpg">
//   </div>
//   <div class="panel-body">
//     <<produto_name>>
//   </div>
// </div>`

var inflaProduto = function(produto){
  var produtoFinal = produtoTemplate.replace("<<produto_name>>", produto.name)
  $(".list-products").append(produtoFinal)
}
$(document).ready(function(){
  $.ajax({
    url: 'scripts/data.json', // URL que fornecerá o dado
    method: "GET" // Verbo HTTP que será utilizado
  }).done(function(data){ // Listener, ou callback, da nossa consulta
    console.log(data); // Mostra os dados adquiridos na consulta
    for(var i = 0; i < data.result.length; i++){
      inflaProduto(data.result[i]);
    }
  })
})
```

### Visualizando o resultado
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;O resultado desta etapa pode ser observado no branch `external_data_project`:

``` sh    
$ git checkout external_data_project
```
