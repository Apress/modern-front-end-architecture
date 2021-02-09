import React from "react";
import "./ProductListItem.css";

import Button from "../../atoms/Button";
import Card from "../../atoms/Card";
import Heading from "../../atoms/Heading";
import Text from "../../atoms/Text";

export default function ProductListItem({
  name,
  price,
  imageUrl,
  onAddToCart,
  isSoldOut,
  isOnSale,
  isInCart
}) {
  let buttonText = "Add to Cart";

  if(isSoldOut) {
    buttonText = "Sold out"
  }

  if(isInCart) {
    buttonText = "Remove from Cart"
  }

  return (
    <Card highlight={isOnSale}>
      <Heading>
        {name} {isOnSale && <span>(On Sale)</span>}
      </Heading>
      <img src={imageUrl} alt="" />
      <Text>{price}</Text>
      <Button onClick={onAddToCart} disabled={isSoldOut}>
        {buttonText}
      </Button>
    </Card>
  );
}
