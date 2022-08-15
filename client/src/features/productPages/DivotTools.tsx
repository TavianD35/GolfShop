import { useState, useEffect } from "react";
import agent from "../../app/api/agent";
import LoadingComponent from "../../app/layout/LoadingComponent";
import { Product } from "../../app/models/products";
import ProductList from "../catalog/ProductList";

export default function Catalog() {
    const [products, setProducts] = useState<Product[]>([]);
    const[loading, setLoading] = useState(true);

    useEffect(() => {
        agent.Catalog.list()
        .then(products => setProducts(products))
        .catch(error => console.log(error))
        .finally(() => setLoading(false))
    }, [])

    if(loading) return <LoadingComponent message='Loading products...' />

    return (
        <>
            Divot Repair Tool Page
            <ProductList products={products} />
        </>
    )
}