import React, { Component } from 'react';   
import Product from './product';
class Table extends Component {
    state = {  }
   
    render() { 
        const style = !this.props.product.select
    ? { color: "#80808080", cursor: "pointer" }
    : { cursor: "pointer" };
        return ( 
            <tr>
      <th scope="row">{this.props.product.id}</th>
      <td> {this.props.product.name}</td>
      <td>{this.props.product.price}</td>
      <td>
      <i
      style={style}
      onClick={() => this.props.oncharge(this.props.product)}
      className="fas fa-cart-plus"
    ></i>
      </td>
    </tr>
         );
    }
}
 
export default Table;