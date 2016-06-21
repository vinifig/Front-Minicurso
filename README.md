# Mini-curso Frontend

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Durante este minicurso faremos um site representando a lista de produtos de um e-commerce utilizando HTML, CSS, JQuery e Bootstrap.

## Pré-requisitos
   * Node.js (4.3.1+)

## Primeiros Passos

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Clone este repositório e acesse o branch `base_project` com os seguintes comandos:

``` sh
git clone https://github.com/ltiaunesp/Front-Minicurso.git
git checkout base_project
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
    <script src="scripts/main.js" type="text/javascript" charset="utf-8"></script>
    <link rel="stylesheet" href="styles/style.css" type="text/css" charset="utf-8">
    <title>LTIA-Commerce</title>
  </head>
  <body><!-- Aqui devem ser inseridas as tags para estruturar seu site -->
    LTIA-Commerce
  </body>
</html>
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Existem frameworks como `JQuery` e `Bootstrap` que servem para facilitar e agilizar o desenvolvimento de sites. Neste projeto utilizaremos os dois agora mencionados e podem ser baixados nos seguintes links [JQuery](http://jquery.com/) e [Bootstrap](http://getbootstrap.com/).

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Para incluirmos estes frameworks nos projetos, com o branch `base_project`, abra o arquivo `index.html` e insira o seguinte código dentro da tag `head` antes dos nossos arquivos `main.js` e `style.css`

``` html
<script src="scripts/jquery.js" type="text/javascript" charset="utf-8"></script>
<script src="scripts/bootstrap.min.js" type="text/javascript" charset="utf-8"></script>
<link rel="stylesheet" href="styles/bootstrap.min.css" type="text/css" charset="utf-8">
```


&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Neste projeto foi utilizado o tema [Yeti](https://bootswatch.com/yeti/) baseado em Bootstrap, mas nada impede o uso de outros temas, que podem ser encontrados no site [BootsWatch](https://bootswatch.com/yeti/), ou o Bootstrap puro.

### 1.1. Criando a estrutura
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; A partir de agora modificaremos apenas o conteúdo dentro da tag body. Todo site necessita de uma `Barra de Navegação` e por questões de semântica, utilizamos a tag `nav` para implementação da mesma. Utilizando o Bootstrap podemos criar uma barra de navegação da seguinte forma:

``` html
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
```
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Durante a navegação em um site complexo, cheio de páginas e afins, os usuários acabam se perdendo. Então, é interessante a utilização de da `Navegação Estrutural` ou `Breadcrumbs` (Navegação por migalhas de pão). Utilizando o Bootstrap podemos implementar da seguinte forma:

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
Este código inseriu uma margin interna à esquerda e direita de `20px`.
### 1.n. Visualizando o resultado

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;O resultado desta etapa pode ser observado no branch `static_project`:

``` sh    
git checkout static_project
```


## 2. Buscando informações externas

### 2.n. Visualizando o resultado
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;O resultado desta etapa pode ser observado no branch `external_data_project`:

``` sh    
git checkout external_data_project
```
