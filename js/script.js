var elForm = document.querySelector(".js-form");
var elInput1 = document.querySelector(".js-input1");
var elInput2 = document.querySelector(".js-input2");
var elButton1 = document.querySelector(".js-btn1");
var elButton2 = document.querySelector(".js-btn2");
var elTitle = document.querySelector(".js-title");
var elSubTitle = document.querySelector(".js-subtitle")
var Array=["Lamborghini" ,"Audi" ,"BMW" ,"Rols-Roys" ,"Ferrari","Hyundai","Tesla","Chevrolet"];
elTitle.textContent=Array;
elForm.addEventListener("submit",function(evt){
  evt.preventDefault()
  if(elInput1.value !="" || elInput2.value ==""){
  Array.unshift(elInput1.value);
  // Array.unshift(elInput2.value);
  elTitle.textContent=Array
  // elTitle.textContent=Array.pop()
}
// else if(elInput1.value !="" || elInput2.value !="") {
//   Array.push(elInput2.value);
//   elTitle.textContent=Array;
// }
else if(elInput1.value =="" || elInput2.value !=""){
    // Array.push(elInput1.value);
    Array.push(elInput2.value);
    elTitle.textContent=Array
}
else{
  elSubTitle.textContent="inputga hec narsa yozmadingiz"
  elSubTitle.style.color="red"
}
elInput1.value=""
elInput2.value=""
//   console.log(Array);
})

