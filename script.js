function EnviarFormulario() { //Define a função EnviarFormulario
    alert("Inscrição Concluída"); //Exibe um alerta na tela
    
    var contaCliente = new Object(); //Novo objeto chamado "contaCliente" para armazenar os dados do formulário.
    
    contaCliente.nome = document.getElementById("nome").value; //Captura o valor do campo de entrada com id correspondente e o atribui à propriedade "nome" do objeto "contaCliente"
    contaCliente.data = document.getElementById("data").value; 
    contaCliente.sexo = document.getElementById("sexo").value; 
    contaCliente.telefone = document.getElementById("telefone").value; 
    contaCliente.saude = document.getElementById("saude").value; 
    contaCliente.objetivos = document.getElementById("objetivos").value; 
    contaCliente.historico = document.getElementById("historico").value; 
    contaCliente.email = document.getElementById("email").value; 
    
    var json = JSON.stringify(contaCliente); //Converte o objeto "contaCliente" para uma string no formato JSON e a armazena na variável "json" (Notação de Objeto JavaScript)
    
    console.log(json); //Exibe a string JSON no console
    
    console.log(contaCliente.valueOf()); //Exibe o valor do objeto `contaCliente` no console do navegador. `valueOf()` retorna o objeto em si, e nesse caso, é redundante porque `contaCliente` já é o objeto.
}