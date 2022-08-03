import { useEffect, useState } from "react";
import { Product } from "./products";

function App() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/products")
    .then(Response => Response.json())
    .then(data => setProducts(data))
  }, [])

  function addProduct() {
    setProducts(prevState => [...prevState, 
      {
        id: prevState.length + 101,
        name: 'product' + (prevState.length + 1), 
        price: (prevState.length * 100) + 100,
        brand: 'some-brand',
        description: 'some description',
        pictureURL: 'http://pictureurl'
      }])
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
