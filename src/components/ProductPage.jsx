/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-undef */
import React,{useState} from "react";
import "../css/ProductPage.css";
import { useParams } from "react-router-dom";
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import products from "../proudctimage"; 
import menproducts from "../menimage";
function ProductPage() {
  const { id } = useParams();
  const allproducts = [...products, ...menproducts]
  // Find the product by id
const product = allproducts[Number(id)]
console.log(allproducts, id);

  if (!product) {
    return <div>Product not found!</div>;
  }
  const [quantity, setQuantity] = useState(1);
  const images = product.image || [];

  return (
    <div className="product-page">
      {" "}
      <div className="carousel-container">
        {" "}
        <Carousel showThumbs={false} infiniteLoop useKeyboardArrows autoPlay>
          {" "}
          
            <div >
              {" "}
              <img src={images} alt={images.description} />{" "}
            </div>
          {" "}
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
        <button className="add-to-cart"
        type="button" data-bs-toggle="offcanvas" 
        data-bs-target="#offcanvasRight" 
        aria-controls="offcanvasRight"
        >Add to Cart</button>{" "}
      </div>{" "}
    

<div class="offcanvas offcanvas-end" data-bs-scroll="true" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
  <div class="offcanvas-header">
    <h5 class="offcanvas-title" id="offcanvasRightLabel">Offcanvas right</h5>
    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body">
    ...
  </div>
</div>

    </div>
  );
}

export default ProductPage;
