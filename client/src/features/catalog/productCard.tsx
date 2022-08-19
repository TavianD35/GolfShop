import { LoadingButton } from "@mui/lab";
import { Box, Button, Card, CardActions, CardContent, CardHeader, CardMedia, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { Product } from "../../app/models/products";
import { useAppDispatch, useAppSelector } from "../../app/store/configureStore";
import { currencyFormat } from "../../app/util/util";
import image from "../../images/backgroundTurf.jpg";
import { addBasketItemAsync } from "../basket/basketSlice";

interface Props {
    product: Product;
}

export default function ProductCard({ product }: Props) {
    const { status } = useAppSelector(state => state.basket);
    const dispatch = useAppDispatch();

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
                    <LoadingButton
                        loading={status.includes('pendingAddItem' + product.id)}
                        onClick={() => dispatch(addBasketItemAsync({ productId: product.id }))}
                        sx={{ color: '#1b5e20', fontWeight: 'bold' }}
                        size="medium">Add To Cart
                    </LoadingButton>
                    <Button sx={{ color: '#1b5e20', fontWeight: 'bold' }} component={Link} to={`/catalog/${product.id}`} size="medium">View</Button>
                </CardActions>
            </Card>
        </Box>
    )
}