const display=document.getElementById("display");


window.onload = () => {
    if(localStorage.getItem("calculatorValue")){
        display.value= localStorage.getItem("calculatorValue");
    }
};

function appendvalue(value){
    display.value += value;
    saveToStorage();
}

function calculate2() {
    try {

        display.value =eval(display.value);
        saveToStorage();
    } catch(error){
        display.value = "Error";
    }
    
}
function clearDisplay(){
    display.value="";
}
 function saveToStorage() {
    localStorage.setItem("calculatorValue",display.value);
    sessionStorage.setItem("calculatorValue",display.value);
 }