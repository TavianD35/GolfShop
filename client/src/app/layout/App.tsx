import { useEffect, useState } from "react";
import Catalog from "../../features/catalog";
import { Product } from "../models/products";
import { CssBaseline } from '@mui/material';
import Header from "./header";
import { Container } from "@mui/system";

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
    <>
      <CssBaseline />
      <Header />
      <Container>
        <Catalog products={products} addProduct={addProduct} />
      </Container>
    </>
  );
}

export default App;
