import React, { useEffect } from 'react';
import { AiOutlineDelete } from "react-icons/ai";
import { LuMinus } from "react-icons/lu";

import { FiPlus, FiMinus } from 'react-icons/fi';
import { json } from 'react-router';
const ShoppingCart = ({cartItem, setCartItem}) => {
    useEffect(()=> {
const storeditem = JSON.parse(localStorage.getItem('cartItem') ) || []
setCartItem(storeditem)
    }, [])

    useEffect(()=> {
        localStorage.setItem('cartItem', JSON.stringify(cartItem))
            }, [cartItem])
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
                        <div className="row">
                          <div className="col-lg-3 col-md-12 mb-4 mb-lg-0">
                            <div className="bg-image hover-overlay hover-zoom ripple rounded" data-mdb-ripple-color="light">
                              <img src={item.image} className="w-100" alt={item.description} />
                              <a href="#!">
                                <div className="mask" style={{ backgroundColor: 'rgba(251, 251, 251, 0.2)' }}></div>
                              </a>
                            </div>
                          </div>
    
                          <div className="col-lg-5 col-md-6 mb-4 mb-lg-0">
                            <p><strong>{item.description}</strong></p>
                            <button type="button" className="btn btn-primary btn-sm me-1 mb-2" data-mdb-button-init data-mdb-ripple-init data-mdb-tooltip-init title="Remove item">
                              <AiOutlineDelete />
                            </button>
                          </div>
    
                          <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
                            <div className="d-flex mb-4" style={{ maxWidth: '200px' }}>
                              <button className="btn btn-primary px-3 me-2" data-mdb-button-init data-mdb-ripple-init onClick={(e) => { e.target.parentNode.querySelector('input[type=number]').stepDown(); }}>
                                <FiMinus />
                              </button>
    
                              <div className="form-outline" data-mdb-input-init>
                                <input id={`form-${index}`} min="0" name="quantity" value="1" type="number" className="form-control" />
                                <label className="form-label" htmlFor={`form-${index}`}>Quantity</label>
                              </div>
    
                              <button className="btn btn-primary px-3 ms-2" data-mdb-button-init data-mdb-ripple-init onClick={(e) => { e.target.parentNode.querySelector('input[type=number]').stepUp(); }}>
                                <FiPlus />
                              </button>
                            </div>
    
                            <p className="text-start text-md-center">
                              <strong>NGN {item.price}</strong>
                            </p>
                          </div>
                        </div>
                        <hr className="my-4" />
                      </React.Fragment>
                    ))}
                  </div>
                </div>
    
                <div className="card mb-4">
                  <div className="card-body">
                    <p><strong>Expected shipping delivery</strong></p>
                    <p className="mb-0">12.10.2020 - 14.10.2020</p>
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
                      <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                        Products
                        <span>$53.98</span>
                      </li>
                      <li className="list-group-item d-flex justify-content-between align-items-center px-0">
                        Shipping
                        <span>Gratis</span>
                      </li>
                      <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                        <div>
                          <strong>Total amount</strong>
                          <strong>
                            <p className="mb-0">(including VAT)</p>
                          </strong>
                        </div>
                        <span><strong>$53.98</strong></span>
                      </li>
                    </ul>
    
                    <button type="button" className="btn btn-primary btn-lg btn-block" data-mdb-button-init data-mdb-ripple-init>
                      Go to checkout
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
