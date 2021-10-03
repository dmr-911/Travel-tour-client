import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const { cart } = props;
    let total = 0;
    let quantity = 0;
    for (const element of cart) {
        element.quantity = !element.quantity ? 1 : element.quantity;
        total = total + element.price * element.quantity;
        quantity = quantity + element.quantity;
    }
    const tax = (total * 10) / 100;
    const totalWithTax = total + tax;
    return (
        <div className="cart">
            <h4>Order Summary</h4>
            <p>Order Items : {quantity}</p>
            <p>Total Price : {total.toFixed(2)}</p>
            <p>Tax : {tax.toFixed(2)}</p>
            <h5 className="text-danger">Order Total : {totalWithTax.toFixed(2)}</h5>
            <button className="btn btn-warning border border-1 border-dark" type="button">
            Review your order
          </button>
        </div>
    );
};

export default Cart;