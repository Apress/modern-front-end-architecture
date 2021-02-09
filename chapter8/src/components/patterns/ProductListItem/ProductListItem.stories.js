import React from "react";
import { action } from "@storybook/addon-actions";
import ProductListItem from "./ProductListItem";
import { text, withKnobs } from "@storybook/addon-knobs";

export default { title: "patterns/ProductListItem", decorators: [withKnobs] };

export const Standard = ({
  name=text("Name", "Standard Coffee"),
  price=text("price", "2.50"),
  onAddToCart=action("Add to cart clicked"),
  imageUrl=text(
      "imageUrl",
      "https://source.unsplash.com/tNALoIZhqVM/200x100/"
    )
}) => (
  <ProductListItem
    name={name}
    price={price}
    onAddToCart={onAddToCart}
    imageUrl={imageUrl}
  />
);

export const SoldOut = ({
  name=text("Name", "Standard Coffee"),
  price=text("price", "2.50"),
  onAddToCart=action("Add to cart clicked"),
  imageUrl=text(
      "imageUrl",
      "https://source.unsplash.com/tNALoIZhqVM/200x100/"
    )
}) => (

  <ProductListItem
    name={name}
    price={price}
    onAddToCart={onAddToCart}
    imageUrl={imageUrl}
    isSoldOut
  />
);

export const OnSale = ({
  name=text("Name", "Standard Coffee"),
  price=text("price", "2.50"),
  onAddToCart=action("Add to cart clicked"),
  imageUrl=text(
      "imageUrl",
      "https://source.unsplash.com/tNALoIZhqVM/200x100/"
    )
}) => (
  <ProductListItem
    name={name}
    price={price}
    onAddToCart={onAddToCart}
    imageUrl={imageUrl}
    isOnSale
  />
);
