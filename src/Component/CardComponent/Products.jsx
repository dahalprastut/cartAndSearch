import React, { Component } from 'react';
import './card.scss';

class Products extends Component {

    state = {
        product: '',
        price: '',
        id:'',
        infos:[
            {id:0 , product:'Apple' , price:180},
            {id:1 , product:'Mango' , price:280},
            {id:2 , product:'Watermellon' , price:120},
            {id:3 , product:'Banana' , price:70}
        ]
    }

    buttonClickHandler = (id) => {
        var infoIndex = this.state.infos.findIndex(i =>{
            return i.id === id;
        })

       if(infoIndex !== -1){
           infoIndex = id;
       }

        // const desiredId = this.state.infos[this.state.infos.length - 1 ].id + 1
        const info = {
            ...this.state.infos[infoIndex]
        }
        
        var newProduct = info.product;
        var newPrice = info.price;
        this.setState({
            product:newProduct,
            price:newPrice
        },() =>  this.props.clicked({
            id: infoIndex,
            price: this.state.price,
            product: this.state.product
        }))

       

    }

    render() {
        return (
            <div className='for-products'>
                <h2>List of Products</h2>
                <table>
                    <thead>
                        <tr>
                            <td>Product</td>
                            <td>Add</td>
                            <td>Price per product</td>
                        </tr>
                    </thead>
                    <tbody>

                        {this.state.infos.map((data,index)=>{
                            return (
                                <tr>
                                <td>{data.product}</td>
                                <td><button onClick = {()=>this.buttonClickHandler(data.id)}>Add to Cart</button></td>
                                <td>{data.price}</td>
                            </tr>
                            )
                        })}

                    </tbody>
                </table>
            </div>
        );
    }
}

export default Products;