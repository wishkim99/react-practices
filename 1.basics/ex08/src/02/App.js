import React from 'react';

const App=function(){
    /*
        리액트 컴포넌트는 단일 루트 노드만 렌더링 할 수 있다.
        오류:
         return( 
            <h2>App02</h2>
            <p>JSX Tutorials-특징2: Single Root Node</p>
        );
    */

    return( //랜더링 할 것을 return
        <div id="APP">
            <h2>App02</h2>
            <p>JSX Tutorials-특징2: Single Root Node</p>
          
        </div>
    );
}

export default App;
