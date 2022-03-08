import React from 'react';

const App = function () {
    // const App = React.createElement('h1', null, 'Hello World');
    // return App;
    const message='Hello World';
    return( //메시지를 출력하는 하나의 component
      <div>
          <h1>{message}</h1>
      </div>
    );
    
  }
  
  export { App };