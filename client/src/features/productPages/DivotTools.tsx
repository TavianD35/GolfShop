import { useEffect } from "react";
import LoadingComponent from "../../app/layout/LoadingComponent";
import { useAppSelector, useAppDispatch } from "../../app/store/configureStore";
import { productSelectors, fetchProductsAsync } from "../catalog/catalogSlice";
import ProductList from "../catalog/ProductList";

export default function DivotToolsPage() {
    const products = useAppSelector(productSelectors.selectAll);
    const {productsLoaded, status} = useAppSelector(state => state.catalog);
    const dispatch = useAppDispatch();

    const divotTools = products.filter(product => {
        return product.productType === 'Divot Repair Tool';
    });

    useEffect(() => {
        if (!productsLoaded) dispatch(fetchProductsAsync());
    }, [productsLoaded])

    if(status.includes('pending')) return <LoadingComponent message='Loading products...' />

    return (
        <>
            <ProductList products={divotTools} />
        </>
    )
}