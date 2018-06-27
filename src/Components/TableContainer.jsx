import React, { Component } from "react";
import Home from "./Home";
import Nav from './Nav'
import Table from './Table'


export default class TableContainer extends Component {
  render() {
    return (
        <div className='table-container'>
            <Table />
        </div>

    );
  }
}
