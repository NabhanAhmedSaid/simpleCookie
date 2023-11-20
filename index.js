var Savebtn = document.getElementById("btnSave");
var inputValue = document.getElementById("cookieInput");
var inputName = document.getElementById("NameInput");
var Showbtn = document.getElementById("btnShow");
var text = document.getElementById("pItems");
Savebtn.addEventListener('click',function(){


document.cookie = `${NameInput.value} = ${inputValue.value} ; expires= Sun, 1 Dec 2030 12:00:00 UTC;path=/`;


})
btnShow.addEventListener('click',function(){
     text.innerText = `${document.cookie}`;
   
})
