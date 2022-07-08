import React from 'react';

function Buttons(){
   
    let num1;
    let num2;
    let screenResult;
    let result;
    let type;


    function Calc(value){ 
        screenResult = document.getElementById("calResults");
        (screenResult.innerHTML==='0' || screenResult.innerHTML==='+' || screenResult.innerHTML==='-' || screenResult.innerHTML==='%')  ? screenResult.innerHTML=value : screenResult.innerHTML += value;
        num1 = parseInt(screenResult.innerHTML);
        
    }

    function Plus(){
        num2 = num1;
        screenResult.innerHTML="+";
        type="+";

    }

    function Minus(){
        num2 = num1;
        screenResult.innerHTML="-";
        type="-";

    }

    function Divine(){
        num2 = num1;
        screenResult.innerHTML="%";
        type="%";
    }

    function Result(){
        console.log(type);

        if (type === "+"){
            result = num2 + num1;
            screenResult = document.getElementById("calResults");
            screenResult.innerHTML = result;
            num1=result;
            //console.log();
        }
        else if(type === "-"){
           // console.log(num1);
            result = num2 - num1;
            screenResult = document.getElementById("calResults");
            screenResult.innerHTML = result;
            num1=result;
            //console.log(num2);
        }
        else if(type==="%"){
            result = num2 / num1;
            screenResult = document.getElementById("calResults");
            screenResult.innerHTML = result;
            num1=result;
        }
        
        
       
    }

    return(
        <div>
             <table id='butFrame'>

                <tr>
                    <td ><button id='divine' className='calBut' type='button' onClick={Divine}>%</button></td>
                    <td ><button id='ce' className='calBut'type='button'>CE</button></td>
                    <td ><button id='c' className='calBut'type='button'>C</button></td>
                    <td ><button id='delete' className='calBut'type='button'>DELETE</button></td>
                </tr>

                <tr>
                    <td ><button id='7' className='calBut'type='button' onClick={() => Calc("7")}>7</button></td>
                    <td ><button id='8' className='calBut'type='button'  onClick={() => Calc("8")}>8</button></td>
                    <td ><button id='9' className='calBut'type='button'  onClick={() => Calc("9")}>9</button></td>
                    <td ><button id='multi' className='calBut'type='button'>X</button></td>
                </tr>

                <tr>
                    <td ><button id='4' className='calBut'type='button' onClick={() => Calc("4")}>4</button></td>
                    <td ><button id='5' className='calBut'type='button' onClick={() => Calc("5")}>5</button></td>
                    <td ><button id='6' className='calBut'type='button' onClick={() => Calc("6")}>6</button></td>
                    <td ><button id='minus' className='calBut'type='button' onClick={Minus}>-</button></td>
                </tr>

                <tr>
                    <td ><button id='1' className='calBut'type='button' onClick={() => Calc("1")}>1</button></td>
                    <td ><button id='2' className='calBut'type='button' onClick={() => Calc("2")}>2</button></td>
                    <td ><button id='3' className='calBut'type='button' onClick={() => Calc("3")}>3</button></td>
                    <td ><button id='plus' className='calBut'type='button' onClick={Plus}>+</button></td>
                </tr>

                <tr>
                    <td ><button id='sign' className='calBut'type='button'>+/- </button></td>
                    <td ><button id='0' className='calBut'type='button' onClick={() => Calc("0")}>0</button></td>
                    <td ><button id='coma' className='calBut'type='button'>,</button></td>
                    <td ><button id='result' className='calBut'type='button' onClick={Result}>=</button></td>
                </tr>
             
             </table>
        </div>
    );
}

export default Buttons;