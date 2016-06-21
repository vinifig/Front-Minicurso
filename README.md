# Mini-curso Frontend

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Durante este minicurso faremos um site representando um e-commerce utilizando HTML, CSS, JQuery e Bootstrap.

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

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;E utilizando o `Javascript` conseguimos manipular durante a exibição do site, o seu contéudo, estilo e estrutura.

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Para incorporar o CSS e Javascript em seu HTML é necessário a inserção das tags `link` e `script` conforme o exemplo a seguir no seu arquivo `index.html`:

``` html
<!DOCTYPE html>
<html>
  <head><!-- Aqui deve ser inserido todas e quaisquer tags de inicialização do seu site -->
    <meta charset="utf-8">
    <script src="scripts/main.js" type="text/javascript" charset="utf-8"></script>
    <link rel="stylesheet" href="styles/style.css" type="text/css" charset="utf-8">
    <title>Meu Site</title>
  </head>
  <body><!-- Aqui devem ser inseridas as tags para estruturar seu site -->
    Meu site
  </body>
</html>
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Existem frameworks como `JQuery` e `Bootstrap` que servem para facilitar e agilizar o desenvolvimento de sites. Neste projeto utilizaremos os dois agora mencionados e podem ser baixados nos seguintes links [JQuery](http://jquery.com/) e [Bootstrap](http://getbootstrap.com/).

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Para incluirmos estes frameworks nos projetos, com o branch `base_project`, abra o arquivo `index.html` e insira o seguinte código dentro da tag `head` antes dos nossos arquivos `main.js` e `style.css`

``` html
<script src="scripts/jquery.js" type="text/javascript" charset="utf-8"></script>

<link rel="stylesheet" href="styles/bootstrap.min.css" type="text/css" charset="utf-8">
```


&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Neste projeto foi utilizado o tema [Yeti](https://bootswatch.com/yeti/) baseado em Bootstrap, mas nada impede o uso de outros temas, que podem ser encontrados no site [BootsWatch](https://bootswatch.com/yeti/), ou o Bootstrap puro.

### 1.1. Criando a estrutura


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
