import React, { Component } from 'react';
//bind를 안해주면 함수셋팅이 안됨

export default class extends Component {
    constructor() {
        super(...arguments); //...은 arguments에 여러개가 들어올 수 있음을 의미
        this.state = {
            step: this.props.step,
            val: this.props.begin
        }
    }

    onClickButton(e){
        console.log(this) //this는 class를 가리킴
        this.setState({
            val: this.state.val+this.state.step
        });
    }

    render() {
        return (
            <div>
                <button onClick={this.onClickButton.bind(this)}>
                    <strong>+</strong>
                </button>
                {' '}
                <span>{this.state.val}</span>
            </div>
        );
    }
}