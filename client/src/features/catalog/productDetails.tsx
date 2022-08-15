import { LoadingButton } from "@mui/lab";
import { Button, Divider, Grid, Table, TableBody, TableCell, TableContainer, TableRow, TextField, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import agent from "../../app/api/agent";
import { useStoreContext } from "../../app/context/StoreContext";
import NotFound from "../../app/errors/NotFound";
import LoadingComponent from "../../app/layout/LoadingComponent";
import { Product } from "../../app/models/products";

export default function ProductDetails() {
    const { basket, setBasket, removeItem } = useStoreContext();
    const { id } = useParams<{ id: string }>();
    const [product, setProduct] = useState<Product | null>(null);
    const [loading, setLoading] = useState(true);
    const [quantity, setQuantity] = useState(0);
    const [submitting, setSubmitting] = useState(false);
    const item = basket?.items.find(i => i.productId === product?.id);

    useEffect(() => {
        if (item) setQuantity(item.quantity);
        agent.Catalog.details(Number(id))
            .then(response => setProduct(response))
            .catch(error => console.log(error))
            .finally(() => setLoading(false));
    }, [id, item])

    function handleInputChange(event: any) {
        if (event.target.value >= 0) {
            setQuantity(parseInt(event.target.value));
        }
    }

    function handleUpdateCart() {
        setSubmitting(true);
        if (!item || quantity > item.quantity) {
            const updatedQuantity = item ? quantity - item.quantity : quantity;
            agent.Basket.addItem(product?.id!, updatedQuantity)
                .then(basket => setBasket(basket))
                .catch(error => console.log(error))
                .finally(() => setSubmitting(false))
        } else {
            const updatedQuantity = item.quantity - quantity;
            agent.Basket.removeItem(product?.id!, updatedQuantity)
                .then(() => removeItem(product?.id!, updatedQuantity))
                .catch(error => console.log(error))
                .finally(() => setSubmitting(false));
        }
    }

    if (loading) return <LoadingComponent message='loading product...' />

    if (!product) return <NotFound />

    return (
        <Grid container spacing={6}>
            <Grid item xs={6}>
                <img src={product.pictureUrlBlack} alt={product.name} style={{ width: '100%' }} />
            </Grid>
            <Grid item xs={6}>
                <Typography variant='h3'>{product.name}</Typography>
                <Divider sx={{ mb: 6 }} />
                <Typography variant='h4' color='#2e7d32'>${(product.price / 100).toFixed(2)}</Typography>
                <TableContainer>
                    <Table>
                        <TableBody>
                            <TableRow>
                                <TableCell sx={{ fontSize: 18 }}>Name:</TableCell>
                                <TableCell sx={{ fontSize: 18 }}>{product.name}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell sx={{ fontSize: 18 }}>Description:</TableCell>
                                <TableCell sx={{ fontSize: 18 }}>{product.description}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell sx={{ fontSize: 18 }}>Plastic Type:</TableCell>
                                <TableCell sx={{ fontSize: 18 }}>{product.plasticType}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell sx={{ fontSize: 18 }}>Product Type:</TableCell>
                                <TableCell sx={{ fontSize: 18 }}>{product.productType}</TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
                <br>
                </br>
                <Grid container spacing={2}>
                    <Grid item xs={6}>
                        <TextField
                            onChange={handleInputChange}
                            variant='outlined'
                            type='number'
                            color='success'
                            label='Quantity in Cart'
                            fullWidth
                            value={quantity}
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <LoadingButton
                            disabled={item?.quantity === quantity || !item && quantity === 0}
                            loading={submitting}
                            onClick={handleUpdateCart}
                            sx={{ height: '55px' }}
                            color = 'success'
                            size='large'
                            variant='contained'
                            fullWidth
                        >
                            {item ? 'Update Quantity' : 'Add to Cart'}
                        </LoadingButton>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}

function handleSearch(): void {
    throw new Error("Function not implemented.");
}
