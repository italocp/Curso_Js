function contar() {
  let ini = document.querySelector('#inicio');
  let fim = document.querySelector('#final');
  let passo = document.querySelector('#passos');
  let res = document.querySelector('#res');

  if (ini.value.length == 0 || fim.value.length == 0 ||passo.value.length == 0) {
    window.alert('error');
  } else {
    res.innerHTML = 'Contando: '
    let i = Number(ini.value);
    let f = Number(fim.value);
    let p = Number(passo.value);

    if (i < f) {
      for (let c = i; c <= f; c += p) {
        res.innerHTML += `\u{27A1} ${c} `
      }
    } else {
      for  (let c = i; c >= f; c -= p) {
        res.innerHTML += `\u{27A1} ${c} `
      }
    }


  }

}