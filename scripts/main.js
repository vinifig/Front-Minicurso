// implementação es5:
var produtoTemplate = '<div class="card panel panel-default"><div class="panel-heading"><img src="assets/slack.jpg"></div><div class="panel-body"><<produto_name>></div></div>'

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
