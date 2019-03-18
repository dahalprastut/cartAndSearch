import React, { Component } from 'react';
import './App.scss';
import Total from './Component/Total';
import Table from './Component/Table';
import Data from './Component/Data';

class App extends Component {

  state={
    income:[],
    expenses:[],
    savings:true
  }

  updateTable = (data)=>{

    if(this.state.savings){
      this.setState({
        income:[...this.state.income , data],
      })
    

    }else{
      this.setState({
        expenses:[...this.state.expenses , data],
        
      })
    }

  
  }

  changeState = ()=>{
    this.setState({
      savings:!(this.state.savings)
      
    })
  }

  render() {
    return (
      <div className="App">
        <div className="center">
        
          <Total />

          <button onClick = {this.changeState}>{this.state.savings ? 'income' : 'expenses' }</button>

          <Data clicked = {(state)=>this.updateTable(state)}/>

          <div className="clearfix">
            <Table  tableValue = {this.state.income} />
            <Table  tableValue = {this.state.expenses} />
          
          </div>

        </div>
      </div>
    );
  }
}

export default App;
