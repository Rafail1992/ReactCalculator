import React from 'react';

function Buttons(){
    return(
        <div>
             <table id='butFrame'>

                <tr>
                    <td className='calBut'>%</td>
                    <td className='calBut'>CE</td>
                    <td className='calBut'>C</td>
                    <td className='calBut'>DELETE</td>
                </tr>

                <tr>
                    <td className='calBut'>7</td>
                    <td className='calBut'>8</td>
                    <td className='calBut'>9</td>
                    <td className='calBut'>x</td>
                </tr>

                <tr>
                    <td className='calBut'>4</td>
                    <td className='calBut'>5</td>
                    <td className='calBut'>6</td>
                    <td className='calBut'>-</td>
                </tr>

                <tr>
                    <td className='calBut'>1</td>
                    <td className='calBut'>2</td>
                    <td className='calBut'>3</td>
                    <td className='calBut'>+</td>
                </tr>

                <tr>
                    <td className='calBut'>+/-</td>
                    <td className='calBut'>0</td>
                    <td className='calBut'>,</td>
                    <td className='calBut'>=</td>
                </tr>
             
             </table>
        </div>
    );
}

export default Buttons;