function gerar() {
  let num = document.querySelector('#num')
  let tab = document.querySelector('#seltab')

  if (num.value.length == 0) {
    alert('Por favor insira um numero')
  } else {
    tab.innerHTML = ''
    let n = Number(num.value)
    /*
    FOR

    Declara 
    */
    for (let c = 1; c <= 10; c++) {
      let item = document.createElement('option')
      item.text = `${n} x ${c} = ${n * c}`
      item.value = `tab${c}`
      tab.appendChild(item)
    }
  }
}