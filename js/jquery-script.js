//efeito de esconder formulário de cadastro

//Fazendo do jeito tradicional com JS puro

// function cadastro(){
//    let cadastro = document.getElementById('form-cadastrar');
//    cadastro.style.display='block';
//    let login = document.getElementById('section-login');
//    login.style.display='none';
//    let botaoCadastrar = document.getElementById('botao-cadastrar');
//    botaoCadastrar.style.display='none';
// }


//Fazendo com Jquery 


$(document).ready(function(){ //Essa é a inicialização padrão do Jquery, sempre precisa ser iniciada assim.

   $("#botao-cadastrar").click(function(){// capturando o elemento botão pelo DOM com id, equivalente a document.getElementById() e passando o evento de click pra ele. 

      $("#form-cadastrar").slideToggle("slow");//Acessando o form e essa função slideToggle('slow'), se o form não estiver aparecendo, ele faz aparecer e se o form estiver aparecendo e essa função toggle for acionada, ela faz sumir. Temos a função .show, que faz aparecer e a .hide que faz desparecer, a toogle é a mistura dos dois com efeito. 

      $("#section-login").slideToggle("slow");//Fazendo o login sumir

      $("#botao-cadastrar").hide();//Fazendo o botão não é cadastrado sumir, não usamos o slide toggle porque como queremos fazer apenas sumir o botão, é mais indicado, o slideToggle tem um efeito de troca.

   });

});