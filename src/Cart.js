import React, { Component } from 'react';
import Products from './Component/CardComponent/Products'
import Table from './Component/CardComponent/Table'

class Cart extends Component {

    state = {
        product:[],
    }

    newProduct = (data)=>{
        // alert(data.price);
        this.setState({
            // product()
            product:[...this.state.product , data]
        })

    }

    render() {
        return (
            <div>
                <div className="center">
                    <Products clicked={(state) => this.newProduct(state)}/>
                    <Table tableProductData={this.state.product} />
                </div>
            </div>
        );
    }
}

export default Cart;