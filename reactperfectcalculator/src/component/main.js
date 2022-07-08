import React from 'react';
import Screen from './mainComponents/screen';
import Buttons from './mainComponents/buttons';

function Main(){
    return(
        <div>
            <div id='mainFrame'>
                <Screen/>
                <Buttons/>
            </div>
        </div>
    );
}

export default Main;