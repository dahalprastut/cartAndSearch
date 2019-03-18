import React, { Component } from 'react';
// import './component.scss';
const Table = (props) => {
    return (
        <div className="for-table">
            <table>
                <thead>
                    <tr>
                        <td>Source</td>
                        <td>Price</td>
                    </tr>

                </thead>

                <tbody>
                    {props.tableValue.map(data => {
                        return(

                        <tr>
                            <td>{data.source}</td>
                            <td>{data.price}</td>
                        </tr>
                        )
                    })
                    }

                </tbody>
            </table>
        </div>
    );
}

export default Table;