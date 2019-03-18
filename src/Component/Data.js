import React, { Component } from 'react';
import './component.scss';
class Data extends Component {

    state = {
        source:'',
        price:''
    }

    enterSourceHander = (event)=>{
        this.setState({
            source:event.target.value
        })
    }

    enterPriceHander = (event)=>{
        this.setState({
            price:event.target.value
        })
    }

    buttonClickHandler = ()=>{
        this.props.clicked(this.state);
    }

    render() {
        return (
            <div className = 'for-data clearfix'>
                <div className="get-source clearfix">
                    <h3>Enter Source:</h3>
                    <input onChange = {this.enterSourceHander} type="text" placeholder="Source"/>
                </div>
                <div className="get-price clearfix">
                    <h3>Enter Price:</h3>
                    <input onChange={this.enterPriceHander} type="text" placeholder="Price"/>
                </div>
                <button onClick = {this.buttonClickHandler}>Go</button>
            </div>
        );
    }
}

export default Data;