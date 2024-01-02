const screen=document.querySelector('#calcScreen input');

function updateScreen(value){
    screen.value +=value;
}

function clearScreen(){
    screen.value='';
}

function calculate(){
    try{
        screen.value=eval(screen.value);
    }
    catch(error){
        screen.value='error';
    }
}

const buttons=document.querySelectorAll('table#Calculators td');
buttons.forEach((button)=>{
  button.addEventListener('click',()=>{
    const butttonValue=button.textContent;
    switch(butttonValue){
        case 'C':clearScreen();
        break;
        case '=':calculate();
        break;
        default:updateScreen(butttonValue);
        break;
    }  
  })  
})