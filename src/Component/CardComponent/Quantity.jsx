import React, { Component } from 'react';

class Quantity extends Component {
    constructor(props) {
        super(props);
        this.state = {
            quan: 1
        }
    }

    decrease = () => {
        
        if(this.state.quan > 1){
            this.setState({
                quan: this.state.quan - 1
            },  () => { this.props.dec(this.state.quan * this.props.item.price) })
        }else{
            this.setState({
                quan:1
            }, () => { this.props.dec(this.state.quan * this.props.item.price) })
        }
        
        
    }
    increase = () => {
        
        
        var sum;
        if(this.state.quan < 10){

            this.setState({
                quan: this.state.quan + 1
            },  () => { this.props.par(this.state.quan * this.props.item.price) })
        }else{
            this.setState({
                quan:10
            }, () => { this.props.par(this.state.quan * this.props.item.price) })
            alert('we are out of item');
        }
     
    }





    render() {
        const { item } = this.props;
        return (
            <tbody>

                <tr>
                    <td>{item.product}</td>
                    <td className="clearfix">
                        <button className='number' onClick={(event) => { this.decrease() }}>-</button>

                        <span>{this.state.quan}</span>

                        <button className='number' onClick={this.increase}>+</button>
                    </td>
                    <td>{item.price * this.state.quan}</td>
                </tr>
            </tbody>

        );
    }
}

export default Quantity;