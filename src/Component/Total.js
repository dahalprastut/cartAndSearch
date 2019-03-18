import React, { Component } from 'react';
// import './component.scss';

const Total = () => {
    return (
        <div className = 'for-total clearfix'>
            <div className="income-total clearfix">
                <h2>Total Income:</h2>
                <span>0</span>
            </div>
            <div className="expenses-total clearfix">
                <h2>Total Expenses:</h2>
                <span>0</span>
            </div>

        </div>
    );
}

export default Total;   