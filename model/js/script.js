
const display = document.querySelector('.display'); 
const path = document.querySelector('table');

function insert(value){ 

    display.innerHTML += value;                              
    
}

function clearAll(){  
   
    display.innerHTML = ' ';
    
}

function backspace(){
    if(display.textContent){ 
        let bsDisp = display.innerHTML 
        display.innerHTML = bsDisp.substring(0, bsDisp.length-1); 
    }
}

function result(){ 
   if(display.textContent != Error) { 
       display.innerHTML = eval(display.innerHTML);
   }
}


