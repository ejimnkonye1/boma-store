import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import products from "../proudctimage"; // Check the spelling here, should it be 'productimage'?
import menproducts from "../menimage";
const Details = () => {

  const { id } = useParams();
  const allproducts = [...products, ...menproducts]
  // Find the product by id
const product = allproducts[Number(id)]
console.log(allproducts, id);

  if (!product) {
    return <div>Product not found!</div>;
  }

  

  return (
    <div className="container mt-4">
      <div className="card">
        <div className="row no-gutters">
          <div className="col-md-4">
            <img src={product.image} className="card-img" alt={product.description} />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{product.description}</h5>
              <p className="card-text">{product.details}</p>
              <p className="card-text">Price: {product.price}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
