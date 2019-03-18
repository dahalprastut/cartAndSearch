import React, { Component } from 'react';
import './card.scss'
import Quantity from './Quantity'
// import Sum from './Sum'

class Table extends Component {

    state = {
        afterPrices : []
    }

  

    setSum = (sum)=>{
     
        this.setState(state=>({
            afterPrices : [ sum ,...state.afterPrices]
        }))
    }

    test(sum){
        console.log(sum)
        console.log(this.state.afterPrices)
    }
    render() {
        var sum = 0;
        for(var i =0; i < this.state.afterPrices.length; i++){
            sum += this.state.afterPrices[i]
        }

        var fuc = this.props.tableProductData;
        return (
            <div className="for-table-cart">
                <h2>Your Prodcuts</h2>
                <table>
                    <thead>
                        <tr>
                            <td>Products</td>
                            <td>Quantity</td>
                            <td>Price</td>
                            {/* <td>Remove?</td> */}
                        </tr>
                    </thead>
                    {this.props.tableProductData.map((data,index)=>{
                        return (
                            <Quantity par={(sum) => this.setSum(sum)} dec={(sum) => this.test(sum)} item={data}/> 
                            
                        )
                    })}

                    
                    <tfoot>
                        <tr>
                            <td></td>
                            <td></td>
                            <td>Sum : {sum}</td>
                        </tr>
                    </tfoot>
            
                
                        
                
                </table>
            </div>
        );
    }
}

export default Table;