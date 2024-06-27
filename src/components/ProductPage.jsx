/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-undef */
import React,{useState} from "react";
import "../css/ProductPage.css";
import { useParams } from "react-router-dom";
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import products from "../proudctimage"; 
import menproducts from "../menimage";
import { useNavigate } from "react-router-dom";
function ProductPage({cartItem, setCartItem}) {
  const { id } = useParams();
  const [quantity, setQuantity] = useState(1);

  const allproducts = [...products, ...menproducts]
  // Find the product by id
const product = allproducts[Number(id)]
console.log(allproducts, id);

const images = product.image || [];
  if (!product) {
    return <div>Product not found!</div>;
  }
  const Navigate = useNavigate()
  const handleAddToCart = () => {
    //check is product exist
    const existingproduct = cartItem.find((item)=> item.name === product.price)
    if (existingproduct){
      // if product in cart increase it quantity by 1
      existingproduct.quantity += 1
      setCartItem([...cartItem])
    }else{
      // add product to cart
      product.quantity = 1
      setCartItem([...cartItem,product])
      console.log(cartItem)
    }
    Navigate('/cart')
  }

  return (
    <div className="product-page">
      {" "}
      <div className="carousel-container">
        {" "}
        <Carousel showThumbs={false} infiniteLoop useKeyboardArrows autoPlay>
        
          {images.map((images, index) => (
            <div key={index}>
              {" "}
              <img src={images} alt={images.description} />{" "}
            </div>
           ))}
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
        onClick={() => handleAddToCart(product)}
        >Add to Cart</button>{" "}
      </div>{" "}
    

<div class="offcanvas offcanvas-end" data-bs-scroll="true" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
  <div class="offcanvas-header">
    <h5 class="offcanvas-title" id="offcanvasRightLabel">Offcanvas right</h5>
    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body">
    ...
    {cartItem.map((item) => (
      <div>
      <p>{item.price}</p>
      <p>{item.description}</p>
      </div>
    ))}
  </div>
</div>

    </div>
  );
}

export default ProductPage;
