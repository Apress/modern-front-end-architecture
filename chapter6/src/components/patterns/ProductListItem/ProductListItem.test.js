import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import ProductListItem from './ProductListItem';
import { OnSale, SoldOut, Standard } from './ProductListItem.stories';
it('shows on sale label when isOnSale', () => {
  const { getByText } = render(<OnSale />)

    expect(getByText(`(On Sale)`)).toBeInTheDocument();
})

it('disables the button when disabled', () => {
  const { getByText } = render(<SoldOut />)

  expect(getByText("Sold out")).toHaveAttribute('disabled');
});

it('calls onAddToCart when button pressed', () => {
  const onAddToCart = jest.fn();

  const { getByText } = render(<Standard
    onAddToCart={onAddToCart}
  />)

  fireEvent.click(getByText("Add to Cart"))
  expect(onAddToCart).toHaveBeenCalled()
})

