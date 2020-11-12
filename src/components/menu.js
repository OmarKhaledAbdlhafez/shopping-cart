import React, { Component } from "react";
import Product from './product';
import Table from './table';
class Menu extends Component {
  render() {
    return (
      <React.Fragment>
       <h1> Food menu</h1>
       <table className="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">name </th>
      <th scope="col">price</th>
      <th scope="col">select</th>
    </tr>
  </thead>
  <tbody>
     {this.props.products.map((product) => (
          <Table
            key={product.id}
            product={product}
            oncharge={this.props.oncharge}
          />
        ))}
  </tbody>
</table>
    </React.Fragment>
    );
  }
}

export default Menu;
