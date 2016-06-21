$(document).ready(function(){
  $('i').click(function(){
    $('ul').slideToggle('medium');
  })
  
  
  /*
    Para não alterar nada do código só acrecentei o código abaixo.
    
    Na primeira linha usei a função bind que o que ela faz é atrelar um evento a um seletor, seja ele class, id etc...
Eu estou basicamente dizendo para ele conectar o evento resize no seletor window.

resize é o evento responsável por verificar se a tela está sendo redimensionada, ou seja, sempre que a tela(window) for redimensionada ele vai executar o segundo paramentro do bind() que é uma função.

Nessa função eu estou fazendo uma condição.
Se a largura da tela [$(window).width], for maior que 600, ele vai pegar a tag "ul" e colocar um display:block.

Talvez você se pergunte: porque não fazer uma media query no css verificando se a tela é maior e aplicar o display:block na tag "ul"?

Resposta: por que o display:none que o evento slideToggle aplica é inline, que para o navegador tem uma ordem de prioridade maior que a do css, ou seja, ele ignora o css externo e pra ele o interno que é aplicado direto no html é prioridade, então pra poder sobrescrever apenas aplicando outro interno sobrescrevendo o atual, e isso apenas da pra ser feito com a função .css() do jquery como fiz abaixo.

Espero ter explicado, Fica na paz :D
Qualquer dúvida tamo ae.
  */
  
  $(window).bind('resize', function(){
    if($(this).width() > 780){
      $('ul').css('display', 'block');
    }
  });
})