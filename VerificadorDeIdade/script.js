function verificar() {
  let old = document.querySelector('#idade');
  let sex = document.getElementsByName('sexf')
  let old2 = 2020 - Number(old.value)
  let res = document.querySelector('#res')
  let img = document.querySelector('#img')

  

  if (old.value.length == 0) {
    alert('Erro: Sai correndo, VAI FAZER KABUM!!!')
  } else {
    res.innerHTML = ""
    if (sex[0].checked) {
      if (old2 <=18) {
        res.innerHTML = `Você é homem e tem ${old2} anos`
        img.src = "images/boy8.png"
      }else if (old2 <=49) {
        res.innerHTML = `Você é homem e tem ${old2} anos`
        img.src = "images/man22.png"
      }else {
        res.innerHTML = `Você é homem e tem ${old2} anos`
        img.src = "images/man70.png"
      }  
    } else {
      if (old2 <=18) {
        res.innerHTML = `Você é mulher e tem ${old2} anos`
        img.src = "images/girl8.png"
      }else if (old2 <=49) {
        res.innerHTML = `Você é mulher e tem ${old2} anos`
        img.src = "images/woman22.png"
      }else {
        res.innerHTML = `Você é mulher e tem ${old2} anos`
        img.src = "images/woman70.png"
      } 
    }
  }
  old.value = ""
  old.focus()
}