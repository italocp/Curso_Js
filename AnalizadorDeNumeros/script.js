//Chama variavel do html
let body = document.querySelector('#body');
//cria elemento
let h1 = document.createElement('h1');
//define o texto do elemento
let h1txt = document.createTextNode('Analizador de Número')
//define txt como filho de h1
h1.appendChild(h1txt)
//difine h1 como filho de body
body.appendChild(h1);

//cria a section
let section = document.createElement('section')
body.appendChild(section)

//cria p dentro da section
let p = document.createElement('p')
section.appendChild(p)
//texto de p
let txtp = document.createTextNode('Número (entre 1 e 100): ')
p.appendChild(txtp)
//cria input dentro de p
let input = document.createElement('input')
input.setAttribute('id', 'num')
p.appendChild(input)
//cria button dentro de p
let button = document.createElement('button')
button.setAttribute('id', 'btn')
button.setAttribute('onclick', "add()")
p.appendChild(button)
//cria texto dentro de button
let txtbnt = document.createTextNode('Adicionar')
button.appendChild(txtbnt)
//cria select e coloca dentro de section
let select = document.createElement('select')
select.setAttribute('id', 'list')
select.setAttribute('size', '10')
section.appendChild(select)

//cria outro p para button
let btnp = document.createElement('p')
section.appendChild(btnp)
//cria button e coloca dentro de btnp
let fim = document.createElement('button')
let fimtxt = document.createTextNode('Finalizar')
fim.setAttribute('onclick', 'finalizar()')
fim.appendChild(fimtxt) 
btnp.appendChild(fim)
//cria uma div pros resultados
let div = document.createElement('div')
section.appendChild(div)
//cria p dentro da div
let divp = document.createElement('p')
divp.setAttribute('id', 'res')
div.appendChild(divp)

//variavel lista tem q estar fora da função para que ela nn tenha problema de ser
// criada varias vezes.
let list = []
//res fora pra usar nas duas functions
let res = document.querySelector('#res')

function add() {
  let num = document.querySelector('#num')

  //function que verifica se um numero existe ou não no array
  function inlist(n, l) {
    if (l.indexOf(Number(n)) !== -1) {
      return true
    }
  }

  if (num.value.length == 0|| num.value < 1 || num.value > 100 || inlist(num.value, list)) {
     alert("ERRO: Número invalido ou já adicionado")
  } else {

    //criando option
    let opt = document.createElement('option')
    let opttxt = document.createTextNode(`Valor ${num.value} adicionado`)
    opt.appendChild(opttxt)
    select.appendChild(opt)

    //add option to array
    list.push(Number(num.value))
  }
  num.value = ''
  num.focus();
  res.innerHTML = ''
}

function finalizar() {
  if (list.length == 0) {
    alert('Erro: Adicione valores antes de finalizar')
  } else {
    //tamanho do array
    let tam = list.length
    //coloca o array em ordem
    list.sort()
    //maior numero
    let u = tam - 1

    let soma = 0
    //soma os numeros dentro do array
    for (let pos in list) {
      soma += list[pos]
    }

    res.innerHTML = ''
    res.innerHTML += `<p>Ao todo, temos ${tam} números cadastrados</p>`
    res.innerHTML += `<p>O menor valor informado foi ${list[0]}.</p>`
    res.innerHTML += `<p>O maior valor informado foi ${list[u]}.</p>`
    res.innerHTML += `<p>Somando todos os valores, temos ${soma}.</p>`
    res.innerHTML += `<p>A media dos valores é ${soma/tam}.</p>`
  }

}

