import React, { useState, useContext, useEffect } from "react";
import { Col, Row, Media, Button, Spinner } from "reactstrap";
import { useRouter } from "next/router";
import CartContext from "../../../helpers/cart";


const ProductList = ({ colClass, layoutList, openSidebar, noSidebar }) => {
  const cartContext = useContext(CartContext);
  const quantity = cartContext.quantity;

  
  return (
    <Col className="collection-content">
    </Col>
  );
};

export default ProductList;