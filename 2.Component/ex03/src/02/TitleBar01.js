import React, { Component } from 'react'
//setState로 값 변경해줌
//초기값 셋팅은 state
class TitleBar01 extends Component {
    constructor(){
        //부모클래스의 생성자: super
        super(...arguments); //배열 분해
        //this.no vs this.state.no
        
        //this.no=0
        this.state={ //초기값 셋팅
            no:0
        }
    }
    onClickHandler(){
        //this.no vs this.state.no
        //this.no++;
        //console.log(`TitleBar1 Clicked!${this.no}`)

        this.state.no = this.state.no + 1;
        console.log(`TitleBar1 Clicked!${this.state.no }`)
    }
    render(){
        return (
            <h1
                style={{cursor:'pointer'}}
                onClick={this.onClickHandler.bind(this)}>
                ex03: Functional Event Handler(Class Component)
                <br/>
                {
                    // this.no
                    this.state.no
                }
            </h1>
            );
        }
    
}

export default TitleBar01