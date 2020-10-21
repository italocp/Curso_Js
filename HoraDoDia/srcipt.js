let res = document.querySelector('#dia')
let res2 = document.querySelector('#dia2')
let ft = document.querySelector('#ft')
let data = new Date;
//let hora = data.getHours();
let hora = 15;

res.innerHTML = `Agora são ${hora} horas.`
if (hora >= 5 && hora <= 12) {
  res.innerHTML = 'Bom dia'
  res2.innerHTML = `Agora são ${hora} horas.`
  document.body.style.background = 'rgba(241, 241, 35, 0.836)';
  ft.src = 'images/manha.png'

} else if(hora >=13 && hora <= 18) {
  res.innerHTML = 'Boa tarde'
  res2.innerHTML = `Agora são ${hora} horas.`
  document.body.style.background = 'rgb(226, 126, 11)';
  ft.src = 'images/tarde.png'

  
} else {
  res.innerHTML = 'Boa Noite'
  res2.innerHTML = `Agora são ${hora} horas.`
  document.body.style.background = 'rgb(16, 35, 146)';
  ft.src = 'images/noite.png'
}