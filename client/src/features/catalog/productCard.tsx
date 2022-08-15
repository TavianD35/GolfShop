import { LoadingButton } from "@mui/lab";
import { Avatar, Box, Button, Card, CardActions, CardContent, CardHeader, CardMedia, Typography } from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";
import agent from "../../app/api/agent";
import { useStoreContext } from "../../app/context/StoreContext";
import { Product } from "../../app/models/products";
import { currencyFormat } from "../../app/util/util";
import image from "../../images/backgroundTurf.jpg";
import BasketPage from "../basket/BasketPage";

interface Props {
    product: Product;
}

export default function ProductCard({ product }: Props) {
    const [loading, setLoading] = useState(false);

    const { setBasket } = useStoreContext();

    function handleAddItem(productId: number) {
        setLoading(true);
        agent.Basket.addItem(productId)
            .then(basket => setBasket(basket))
            .catch(error => console.log(error))
            .finally(() => setLoading(false));
    }

    return (
        <Box sx={{ boxShadow: 15 }}>
            <Card sx={{ bgcolor: '#eaeaea' }}>
                <CardHeader
                    /*avatar={
                        <Avatar src={product.pictureUrlBlack} />
                    }*/
                    title={product.name}
                    titleTypographyProps={{
                        sx: { fontWeight: 'bold', fontSize: 20, color: '#1b5e20' }
                    }}
                />
                <div style={{ backgroundImage: `url(${image})`, backgroundSize: `fill` }}>
                    <CardMedia
                        sx={{ height: 160, backgroundSize: 'contain' }}
                        image={product.pictureUrlBlack}
                        title={product.name}
                    />
                </div>
                <CardContent>
                    <Typography gutterBottom color='black' variant="h6">
                        {currencyFormat(product.price)}
                    </Typography>
                </CardContent>
                <CardActions>
                    <LoadingButton loading={loading}
                        onClick={() => handleAddItem(product.id)}
                        sx={{ color: '#1b5e20', fontWeight: 'bold' }}
                        size="medium">Add To Cart
                    </LoadingButton>
                    <Button sx={{ color: '#1b5e20', fontWeight: 'bold' }} component={Link} to={`/catalog/${product.id}`} size="medium">View</Button>
                </CardActions>
            </Card>
        </Box>
    )
}