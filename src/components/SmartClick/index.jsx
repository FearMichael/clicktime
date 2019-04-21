import React, { Component } from 'react';
import DumbClick from "../DumbClick"
// import { Module } from 'module';


class SmartClick extends Component {
    state: {
        userScore: 0,
    }
    handleClick(event) {
        this.setState({
            userScore: +1
        });
    }
    render() {
        return  (
            <div className ="row">
                <DumbClick {...this.handleClick} />
                <DumbClick {...this.handleClick} />
                <DumbClick {...this.handleClick} />
            </div>
        );
    }
}

export default SmartClick;