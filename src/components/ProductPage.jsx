/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-undef */
import React from "react";
import "../css/ProductPage.css";

function ProductPage() {
  return (
    <div className="product-page">
      {" "}
      <div className="carousel-container">
        {" "}
        <Carousel showThumbs={false} infiniteLoop useKeyboardArrows autoPlay>
          {" "}
          {images.map((img, index) => (
            <div key={index}>
              {" "}
              <img src={img.image_url} alt={img.description} />{" "}
            </div>
          ))}{" "}
        </Carousel>{" "}
      </div>{" "}
      <div className="product-info">
        {" "}
        <h1 className="product-name">{product.name}</h1>{" "}
        <p className="product-price">₦{product.price}</p>{" "}
        <p className="product-description">{product.description} </p>{" "}
        
        <div className="quantity-selector">
          {" "}
          <button
            onClick={() => setQuantity(quantity - 1)}
            disabled={quantity <= 1}
          >
            -
          </button>{" "}
          <span>{quantity}</span>{" "}
          <button onClick={() => setQuantity(quantity + 1)}>+</button>{" "}
        </div>
        <button className="add-to-cart">Add to Cart</button>{" "}
      </div>{" "}
    </div>
  );
}

export default ProductPage;
