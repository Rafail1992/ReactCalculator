import React from 'react';

function Buttons(){
   
    let num1;
    let num2;
    let screenResult;
    let result;
    let type;

//All the buttons functions
    function Calc(value){ 
        screenResult = document.getElementById("calResults");
        if(screenResult.innerHTML.length < 12){
            
            (screenResult.innerHTML==='0' || screenResult.innerHTML==='+' || screenResult.innerHTML==='-' || screenResult.innerHTML==='%' || screenResult.innerHTML==='X' || screenResult.innerHTML==='/')  ? screenResult.innerHTML=value : screenResult.innerHTML += value;
            if(screenResult.innerHTML==='.'){screenResult.innerHTML="0.";}
            num1 = parseFloat(screenResult.innerHTML);
        
            //Chech for comas to prevent errors
            if(screenResult.innerHTML.search(".") === false){
        
                //Check the size
                switch(screenResult.innerHTML.length){
                    case 4:
                         document.getElementById("numLength").innerHTML="K";
                         document.getElementById("calResults").style.fontSize = "18px";
                         break;
                    case 7:
                        document.getElementById("numLength").innerHTML="M";
                        document.getElementById("calResults").style.fontSize = "18px";
                        break;
                    case 10:
                        document.getElementById("numLength").innerHTML="T";
                        document.getElementById("calResults").style.fontSize = "18px";
                        break;
                    default:
                        document.getElementById("numLength").innerHTML=" ";
                        document.getElementById("calResults").style.fontSize = "36px";
                        break;
            }

        }
        
        }
        else{
            screenResult.innerHTML +="";
        }
        


        
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
        screenResult.innerHTML="/";
        type="/";
    }

    function Multi(){
        num2 = num1;
        screenResult.innerHTML="X"
        type="X";
    }

    function Reset(){
        num1 = 0;
        screenResult.innerHTML="0";

    }

    function Rest(){
        num2 = num1;
        screenResult.innerHTML="%";
        type="%";
    }

    function Delete(){
        let me = screenResult.innerHTML.length;
        let deleteResult = screenResult.innerHTML.substring(0,(me-1));
        //let deleteResult=0;
        //let editedString = screenResult.innerHTML.replaceAll(".","");
        //let comas = editedString.length;
        //comas%3 === 1 && comas > 2 ? deleteResult = screenResult.innerHTML.substring(0,(me-2)) : deleteResult = screenResult.innerHTML.substring(0,(me-1));
        deleteResult === "" ? deleteResult="0" : deleteResult += ""; 
        screenResult.innerHTML = deleteResult;
        console.log(deleteResult,me%3);
        num1=parseFloat(deleteResult);

          //Chech for comas to prevent errors
          if(screenResult.innerHTML.search(".") === false){
        
            //Check the size
            switch(screenResult.innerHTML.length){
                case 4:
                     document.getElementById("numLength").innerHTML="K";
                     document.getElementById("calResults").style.fontSize = "18px";
                     break;
                case 7:
                    document.getElementById("numLength").innerHTML="M";
                    document.getElementById("calResults").style.fontSize = "18px";
                    break;
                case 10:
                    document.getElementById("numLength").innerHTML="T";
                    document.getElementById("calResults").style.fontSize = "18px";
                    break;
                default:
                    document.getElementById("numLength").innerHTML=" ";
                    document.getElementById("calResults").style.fontSize = "36px";
                    break;
            }
        }
        
    }
    
    function Sign(){
        num1 = -(num1);
        let signNumber = num1.toString();
        console.log(signNumber);
        screenResult.innerHTML=signNumber;

    }

    


    //Calculate the final result

    function Result(){
        let numResult

        if (type === "+"){
            result = num2 + num1;
            screenResult = document.getElementById("calResults");
            
            //Reduce the result size
            if (result.length < 12 ){
                screenResult.innerHTML = result;
            }
            else {
                let stringResult = result.toString();
                screenResult.innerHTML = stringResult.substring(0,11);
                numResult = parseFloat(screenResult.innerHTML);
            }

            screenResult.innerHTML = result;
            num1=numResult;
           
        }
        else if(type === "-"){
           
            result = num2 - num1;
            screenResult = document.getElementById("calResults");

             //Reduce the result size
             if (result.length < 12 ){
                screenResult.innerHTML = result;
             }
             else {
                 let stringResult = result.toString();
                 screenResult.innerHTML = stringResult.substring(0,11);
                 numResult = parseFloat(screenResult.innerHTML);
             }

            screenResult.innerHTML = result;
            num1=numResult;
            
        }
        else if(type === "/"){
            result = num2 / num1;
            screenResult = document.getElementById("calResults");

            if (result.length < 12 ){
                 screenResult.innerHTML = result;
            }
            else {
                let stringResult = result.toString();
                screenResult.innerHTML = stringResult.substring(0,11);
                numResult = parseFloat(screenResult.innerHTML);
                 numResult = parseFloat(screenResult.innerHTML);
          
            }
            
            num1=numResult;
            console.log(numResult,num1);
        }
        
        else if(type === "%"){
            result = num2 % num1;
            screenResult = document.getElementById("calResults");

             //Reduce the result size
             if (result.length < 12 ){
                screenResult.innerHTML = result;
             }
             else {
                let stringResult = result.toString();
                screenResult.innerHTML = stringResult.substring(0,11);
                numResult = parseFloat(screenResult.innerHTML);
             }

            screenResult.innerHTML = result;
            num1=numResult;
        }

        else if(type === "X"){
            result = num2 * num1;
            screenResult = document.getElementById("calResults");

             //Reduce the result size
             if (result.length < 12 ){
                screenResult.innerHTML = result;
             }
             else {
                let stringResult = result.toString();
                screenResult.innerHTML = stringResult.substring(0,11);
                numResult = parseFloat(screenResult.innerHTML);
             }

            screenResult.innerHTML = result;
            num1=numResult;
        }
        
        
       
    }

    return(
        <div>
             <table id='butFrame'>

                <tr>
                    <td ><button id='divine' className='calBut' type='button' onClick={Divine}>/</button></td>
                    <td ><button id='ce' className='calBut'type='button' onClick={Rest}>%</button></td>
                    <td ><button id='c' className='calBut'type='button' onClick={Reset}>C</button></td>
                    <td ><button id='delete' className='calBut'type='button' onClick={Delete}>DELETE</button></td>
                </tr>

                <tr>
                    <td ><button id='7' className='calBut'type='button' onClick={() => Calc("7")}>7</button></td>
                    <td ><button id='8' className='calBut'type='button'  onClick={() => Calc("8")}>8</button></td>
                    <td ><button id='9' className='calBut'type='button'  onClick={() => Calc("9")}>9</button></td>
                    <td ><button id='multi' className='calBut'type='button' onClick={Multi}>X</button></td>
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
                    <td ><button id='sign' className='calBut'type='button' onClick={Sign}>+/- </button></td>
                    <td ><button id='0' className='calBut'type='button' onClick={() => Calc("0")}>0</button></td>
                    <td ><button id='coma' className='calBut'type='button' onClick={()=>Calc(".")}>,</button></td>
                    <td ><button id='result' className='calBut'type='button' onClick={Result}>=</button></td>
                </tr>
             
             </table>
        </div>
    );
}

export default Buttons;