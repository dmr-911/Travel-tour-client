import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import './Product.css';

const Product = (props) => {
  const shoppingCart = <FontAwesomeIcon icon={faShoppingCart} />;
    const { product,handleAddToCart } = props;
  const { name, seller, stock, price, img } = product;
    return (
      <div className="d-md-flex ps-5 border-bottom border-3 text-start">
        <div className="mx-3">
          <img src={img} alt="" />
        </div>

        <div className="mb-3">
          <h4 className="fw-normal text-primary">{name}</h4>
          <p>By : {seller}</p>
          <p>Price : ${price}</p>
          <p>
            <small>only {stock} left in stock - order soon</small>
          </p>
          <button onClick={()=> handleAddToCart(product)} className="btn btn-warning px-5 border border-1 border-dark" type="button">
            { shoppingCart } Add to cart
          </button>
        </div>
      </div>
    );
};

export default Product;