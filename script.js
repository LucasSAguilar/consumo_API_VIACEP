/* USO DA API 'VIACEP' */


// MÉTODO UM:
function metodo1(){
console.log('Método 1:');
// Recebe uma promise
const receberCep = fetch(`https://viacep.com.br/ws/${cep}/json/`)
.then(resposta => resposta.json()) // Coleta os dados e transforma em json

.then(r => {
    
    if (r.erro){ // Se o r.erro for igual a true
        throw Error("Esse CEP não existe!") // Lance o "Esse Cep Não existe"
    
    } else 
    console.log(r) // Se não mostre o json do console
})

// Catch é o método de coleta de erro
.catch(erro => console.log(erro)) // Se foi identificado um erro, mostre no console
.finally(mensagem => console.log('Método 2:')) // Função que vai ocorrer após o fim do processo

}


// MÉTODO DOIS:
var erroEscrito = document.getElementById('erro')
// função assincrona 
async function buscarEndereco (cep){

    try {
                        // Aguarda receber os dados do cep
    var consultaCEP = await fetch(`https://viacep.com.br/ws/${cep}/json/`)
                                // Transforma em json
    var consultaCEPFormatada = await consultaCEP.json()
    if(consultaCEPFormatada.erro){
        throw Error ('CEP não encontrado')
       
    } else
    // Exibe na tela
    console.log(consultaCEPFormatada)

    var cidade = document.getElementById('cidade')
    var endereco = document.getElementById('endereco')
    var estado = document.getElementById('estado')

    cidade.value = consultaCEPFormatada.localidade
    endereco.value = consultaCEPFormatada.logradouro
    estado.value = consultaCEPFormatada.uf

} catch(erro){
    console.log(erro)
    erroEscrito.innerHTML = '<p>CEP não encontrado</p>';
}
}


var inputCep = document.getElementById('cep')
inputCep.addEventListener('focusout', ()=>{buscarEndereco(inputCep.value)})
