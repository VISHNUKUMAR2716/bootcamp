const modetoggle= document.getElementById("modetoggle")
modetoggle,
addEventListener("click",()=>{
  document.body.classList.toggle('light-mode')

  if(document.body.classList.contains('light-mode')){
    modetoggle.textContent="@"
  }
  else{
    modetoggle.textContent="#"
  }
})