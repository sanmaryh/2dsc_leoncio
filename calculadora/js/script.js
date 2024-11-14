// FAZ REFERÊNCIA AOS ELEMENTOS DA HIERARQUIA DA ARVORE HTML DOM forma como manipulamos botões e caixas de texto
//document.getElementById
const numero1 = document.querySelector('#numero1')
const numero2 = document.querySelector('#numero2')
const btnCalcular = document.querySelector('#btn-calcular')
const resultado = document.querySelector('.resultado')
const adicao = document.querySelector('.adicao')
const subtracao = document.querySelector('.subtracao')
const multiplicacao = document.querySelector('.multiplicacao')
const divisao = document.querySelector('.divisao')

// CRIA A FUNÇÃO CALCULAR
//function c/ retorno- Não imprime valor
function calcular(){
    const n1 = Number (numero1.value)
    const n2 = Number (numero2.value)
   if(typeof n1 === `number` && typeof n2 === `number`) {
    const add = `A soma de ${n1} e ${n2} = ${n1+n2}`
    const sub = `A subtração de ${n1} e ${n2} = ${n1-n2}`
    const multi = `A multiplicação de ${n1} e ${n2} = ${n1+n2}`
    const div = `A divisão de ${n1} e ${n2} = ${n1+n2}`
    //alert(add)
    adicao.innerHTML = add
    subtracao.innerHTML = sub
    multiplicacao.innerHTML = multi
    divisao.innerHTML = div
   }else {
    alert('Por favor, digite um número correto')
 }
 // alert('Resultado:' + resultado)
}
// ADICIONA ESCUTAR EVENTOS
btnCalcular.addEventListener('click',function(evento){
    evento.preventDefault()// TIRAR O COMPORTAMENTO PADRÃO
    calcular()
})

//BOM MODELO DE OBJETO DO NAVEGADOR, eventos e funções,  como interagimos com o navegador. Usado para pedir permissões para enviar notificações, consultar a URL atual, verificar as dimensões da janela ou a geolocalização do usuário
//console.log()
//ev js açoes q permitem ao usuario interagir com o app

