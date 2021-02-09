import React from "react";
import ProductListItem from "../ProductListItem";
import { statusTypes } from '../../../constants/api'
// This is a simple loading component that we'll want to switch out later
const Loading = () => <span>Loading</span>;
const Error = ({ message }) => <span>An error has occurred! {message}</span>;


export const listTypes = {
  productList: 'productList',
  cart: 'cart'
}
export default function ProductList({ status, data, onAddToCart, listType }) {
  if (status === statusTypes.loading) {
    return <Loading />;
  }

  if (status === statusTypes.errored) {
    return <Error message="Failed to load data" />;
  }

  return data.map((item) => (
    <ProductListItem
      key={item.id}
      name={item.name}
      price={item.price}
      isInCart={listType === listTypes.cart}
      onAddToCart={() => {
        onAddToCart(item.id);
      }}
      imageUrl={item.imageUrl}
    />
  ));
}

ProductList.defaultProps = {
  status: statusTypes.loading,
};
