import { useState } from "react";

function App() {
  const [products, setProducts] = useState([
    {name: 'product', price: 100.00},
  ]);

  function addProduct() {
    setProducts(prevState => [...prevState, 
      {name: 'product' + (prevState.length + 1), price: (prevState.length * 100) + 100}])
  }
  return (
    <div>
      <h1>Golf Ball Stencils</h1>
      <ul>
        {products.map((item, index) => (
          <li key={index}>{item.name} - {item.price}</li>
        ))}
      </ul>
      <button onClick={addProduct}>Add Product</button>
    </div>
  );
}

export default App;
