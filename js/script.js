//efeito do botão voltar ao Topo
function topo(){
    window.scrollTo({
        top: 0,
        left:0,
        behavior: "smooth",
    })
}
//Validação de Login

function login(){
    let usuario = document.getElementById("usuario").value;
    let senha = document.getElementById("senha").value;

    if(usuario == 'admin' && senha == '123'){
        window.location = 'index.html';
        //Esse metodo só pode ser usado se a tag for do tipo input, não funciona para o button porque o button não faz ir para página. 
    }else{
        alert("Acesso negado. Dados invalidos.")
    }

}

//Ativar alert no botão cadastrar

function cadastrado (){
    alert("Cadastrado com sucesso!");
    window.location.href = "index.html"
}



