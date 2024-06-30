import React, { useEffect } from 'react';
import { AiOutlineDelete } from "react-icons/ai";
import { FiPlus, FiMinus } from 'react-icons/fi';

const ShoppingCart = ({ cartItem, setCartItem }) => {
  useEffect(() => {
    const storeditem = JSON.parse(localStorage.getItem('cartItem')) || [];
    setCartItem(storeditem);
  }, [setCartItem]);

  useEffect(() => {
    localStorage.setItem('cartItem', JSON.stringify(cartItem));
  }, [cartItem]);

  const handleRemoveFromCart = (index) => {
    const updatedCartItems = [...cartItem];
    updatedCartItems.splice(index, 1);
    setCartItem(updatedCartItems);
  };

  const updateQuantity = (index, increment) => {
    const updatedCart = [...cartItem];
    updatedCart[index].quantity += increment;
    if (updatedCart[index].quantity < 1) {
      // Remove the item from the cart if quantity becomes zero or negative
      updatedCart.splice(index, 1);
    }
    setCartItem(updatedCart);
  };

  const handleInputChange = (event, index) => {
    const newQuantity = parseInt(event.target.value, 10);
    if (newQuantity >= 0) {
      const updatedCart = [...cartItem];
      updatedCart[index].quantity = newQuantity;
      setCartItem(updatedCart);
    }
  };
// Function to calculate the updated price for each item based on quantity
const calculateUpdatedPrice = (item) => {
  return (parseFloat(item.price) * item.quantity).toFixed(0);
};
const calculateTotalPrice = () => {
  let totalPrice = 0;
  for (const item of cartItem) {
    // Assuming each item has a "price" property and considering quantity
    totalPrice += parseFloat(item.price) * item.quantity;
  }
  return totalPrice;
};
  return (
    <section className="h-100 gradient-custom">
      <div className="container py-5">
        <div className="row d-flex justify-content-center my-4">
          <div className="col-md-8">
            <div className="card mb-4">
              <div className="card-header py-3">
                <h5 className="mb-0">Cart items</h5>
              </div>
              <div className="card-body">
  {cartItem.map((item, index) => (
    <React.Fragment key={index}>
      <div className="row align-items-center">
        <div className="col-lg-3 col-md-12 mb-4 mb-lg-0">
          <div className="bg-image hover-overlay hover-zoom ripple rounded" data-mdb-ripple-color="light">
            <img src={item.image} className="w-100" alt={item.name} />
            <a href="#!">
              <div className="mask" style={{ backgroundColor: 'rgba(251, 251, 251, 0.2)' }}></div>
            </a>
          </div>
        </div>

        <div className="col-lg-5 col-md-6 mb-4 mb-lg-0">
          <p><strong>{item.name}</strong></p>
          <button type="button" className="btn btn-outline-danger btn-sm me-1 mb-2" onClick={() => handleRemoveFromCart(index)}>
            <AiOutlineDelete />
          </button>
        </div>

        <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
          <div className="d-flex align-items-center mb-2" style={{ maxWidth: '200px' }}>
            <button className="btn btn-outline-secondary px-3 me-2" onClick={() => updateQuantity(index, -1)}>
              <FiMinus />
            </button>
            <div className="form-outline">
              <input 
                id={`form-${index}`} 
                min="0" 
                name="quantity" 
                value={item.quantity} 
                type="number" 
                className="form-control" 
                onChange={(event) => handleInputChange(event, index)}
              />
            </div>
            <button className="btn btn-outline-secondary px-3 ms-2" onClick={() => updateQuantity(index, 1)}>
              <FiPlus />
            </button>
          </div>
          <div className="d-flex justify-content-between">
            <p className="text-start text-md-center text-danger">
              <strong>Price ₦{item.price}</strong>
            </p>
            <p className="text-start text-md-center text-danger">
              <strong>Total: ₦{calculateUpdatedPrice(item)}</strong>
            </p>
          </div>
        </div>
      </div>
      <hr className="my-4" />
    </React.Fragment>
  ))}
</div>

            </div>

            <div className="card mb-4 mb-lg-0">
              <div className="card-body">
                <p><strong>We accept</strong></p>
                <img className="me-2" width="45px" src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/visa.svg" alt="Visa" />
                <img className="me-2" width="45px" src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/amex.svg" alt="American Express" />
                <img className="me-2" width="45px" src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/mastercard.svg" alt="Mastercard" />
                <img className="me-2" width="45px" src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce/includes/gateways/paypal/assets/images/paypal.webp" alt="PayPal acceptance mark" />
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card mb-4">
              <div className="card-header py-3">
                <h5 className="mb-0">Summary</h5>
              </div>
              <div className="card-body">
                <ul className="list-group list-group-flush">
                  {/* <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                    Products
                    <span></span>
                  </li> */}
                  {/* <li className="list-group-item d-flex justify-content-between align-items-center px-0">
                    Shipping
                    <span>Gratis</span>
                  </li> */}
                  <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                    <div>
                      <strong>Total amount</strong>
                      
                    </div>
                    <span><strong>{calculateTotalPrice()}</strong></span>
                  </li>
                </ul>
                <hr></hr>
                <button type="button" className="btn btn-sm btn-outline-success btn-lg btn-block w-100 mb-3" >
                  Go to checkout
                </button>
                <button type="button" className="btn btn-sm btn-outline-success btn-lg btn-block w-100" >
                  Continue shopping
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShoppingCart;
