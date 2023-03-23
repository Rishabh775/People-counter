//document.querySelector("#count-el").innerText=5;
 var countR = 0;
function increment(){
    countR=countR+1;
    document.querySelector("#count-el").innerText=countR;
}
 let prev =  document.querySelector("#Text");
function save(){
   
    let count = countR + " - ";
    prev.textContent += count;
   
    countR=0;
    document.querySelector("#count-el").innerText=0;
}
