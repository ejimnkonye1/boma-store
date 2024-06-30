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
    const existingproduct = cartItem.find((item)=> item.name === product.name)
    if (existingproduct){
      // if product in cart increase it quantity by 1
      existingproduct.quantity += 1
      setCartItem([...cartItem])
    }else{
      // add product to cart
      const newItem = {
        ...product,
        quantity: quantity,
      };
      setCartItem([...cartItem,newItem])
      console.log(cartItem)
    }
    // Navigate('/cart')
  }
  
  const viewBut = () => {
    Navigate('/cart')
  }

  return (
    <div className="product-page">
      {" "}
      <div className="carousel-container">
        {" "}
        <Carousel showThumbs={false} infiniteLoop useKeyboardArrows autoPlay>
        
        
            <div >
              {" "}
              <img src={images} alt={images.description} />{" "}
            </div>
    
        </Carousel>{" "}
      </div>{" "}
      <div className="product-info">
        {" "}
        <h1 className="product-name">{product.name}</h1>{" "}
        <p className="product-price">₦{product.price}</p>{" "}
        <p className="product-description">{product.name} </p>{" "}
        
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
    

      <div className="offcanvas offcanvas-end" data-bs-scroll="true" tabIndex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
  <div className="offcanvas-header">
    <h5 className="offcanvas-title" id="offcanvasRightLabel">Cart Items</h5>
    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div className="offcanvas-body d-flex flex-column justify-content-between">
    <div>
      {cartItem.map((item) => (
        <div className="d-flex mb-3" key={item.id}>
          <img src={item.image} width="100px" alt={item.name} />
          <div className="p-2">
          <p>{item.name} x {item.quantity}</p>
            <h6>{item.price}</h6>
            
          
          </div>
        </div>
      ))}
    </div>
    <div className="mt-auto">
      <button className="btn btn-primary w-100" onClick={viewBut}>View cart</button>
    </div>
  </div>
</div>


    </div>
  );
}

export default ProductPage;
