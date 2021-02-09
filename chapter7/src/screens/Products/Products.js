import React, { useEffect, useState } from 'react';
import ProductList, { statusTypes }  from '../../components/patterns/ProductList';

export default function Products() {
  const [ productState, setProductState ] = useState({ 
    data: [], 
    status: statusTypes.loading 
  });
  useEffect(() => {
    const getData = async () => {
      try {
        const productFetch = await fetch('/api/products');
        const productResponse = await productFetch.json();
        setProductState({ data: productResponse.data, status: statusTypes.loaded })
      } catch (ex) {
        console.error(ex);
        setProductState({ data: [], status: statusTypes.errored })
      }
    }

    getData();
  }, []);
  return <ProductList
    data={productState.data}
    status={productState.status}
  />
}