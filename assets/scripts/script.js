// tipos de declaração de variaveis
// var / let / const

// var x = 'x é meu nome' //var pode ser alterado e sempre vai ter o escopo global
// let y = 'meu nome é y' //let pode ser alterado, e tem o escopo local de onde foi criado
// const numero = 2 //const não pode ser alterado depois de declarado, e tem escopo local, assim como o let

// alert(y)

// Capturando elementos pela DOM
// ao usar o "document.", ganhamos acesso no HTML por inteiro, e podemos buscar os elementos por ID ou Classe, por exemplo
const nome = document.getElementById('nome')
const email = document.querySelector('#email')
// console.log(nome);

// function olaMundo() {
//   alert('clicou no botão')
// }

function validaNome() {
  let txtNome = document.querySelector('#txtNome')
  console.log(nome.value);
  if(nome.value.length < 2) {
    txtNome.innerHTML = 'Nome invalido'
    txtNome.style.color = 'red'
    nome.style.border='3px solid red'
  } else {
    txtNome.innerHTML = 'Nome valido'
    txtNome.style.color = 'green'
    nome.style.border='3px solid green'
  }
}

