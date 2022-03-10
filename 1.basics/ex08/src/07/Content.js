import React, {Fragment} from 'react';
import Clock from './Clock'

function content(){
   // new Date();
    return (
        <Fragment>
            <p>{` Dynamic HTML Rendering`}</p>
            <Clock/>
        </Fragment>
        
    );
}

export default content
