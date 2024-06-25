import React from "react";
import { IoCartOutline } from "react-icons/io5";
import { GoSearch } from "react-icons/go";
import '../css/head.css'
export const Head = () => {
    return(
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container">
          <a class="navbar-brand" href="#">Boma</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Men</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Woman</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">All Products</a>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  List
                </a>
                <ul class="dropdown-menu">
                  <li><a class="dropdown-item" href="#">Watch</a></li>
                  <li><a class="dropdown-item" href="#">Jewelries</a></li>
                  <li><hr class="dropdown-divider" /></li>
                  <li><a class="dropdown-item" href="#">necklace</a></li>
                </ul>
              </li>
              <li class="nav-item">
              
              </li>
            </ul>
            {/* <form class="d-flex" role="search">
              <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button class="btn btn-outline-success" type="submit">Search</button>
            </form> */}
            <div  className="d-flex">
            <GoSearch className="go-search" />
          <div className="carticon">
          <IoCartOutline  className="cartout"/>
          <span className="count">0</span>
          </div>
          

          </div>
          </div>
          
        </div>
      </nav>
    )
}