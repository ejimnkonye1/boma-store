import React from 'react';
import { Link } from 'react-router-dom';
import products from '../proudctimage'; // Check the spelling here, should it be 'productimage'?

const ProductList = () => {
  return (
    <div className="container">
      <h6 className='mt-4 mb-4'>FEATURED PRODUCTS</h6>
      <div className="row">
        {products.map((pro, index) => (
          <div className="col-md-3 col-sm-6 mb-4" key={index}>
            <div className="card">
              <Link to={`/details/${pro.id}`}> {/* Corrected link to details */}
                <img src={pro.image} className="card-img-top" height={'250px'} alt={pro.description} />
              </Link>
              <div className="card-body">
                <h6 className="card-title">{pro.description}</h6>
                <p className="card-text">{pro.price}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
