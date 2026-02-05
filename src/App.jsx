import { useState } from 'react'
import ProductTable  from './ProductTable';

function App() {
  return (
    <>
      <div className="container">
        <h1>Fetch Product Details</h1>
        <ProductTable />
      </div>
    </>
  );
}

export default App
