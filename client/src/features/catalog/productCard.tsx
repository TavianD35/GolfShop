import { Avatar, Box, Button, Card, CardActions, CardContent, CardHeader, CardMedia, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { Product } from "../../app/models/products";
import image from "../../images/backgroundTurf.jpg";

interface Props {
    product: Product;
}

export default function ProductCard({ product }: Props) {
    return (
        <Box sx={{ boxShadow: 15 }}>
            <Card sx={{ bgcolor: '#9e9e9e' }}>
                <CardHeader
                    avatar={
                        <Avatar src={product.pictureUrlBlack} />
                    }
                    title={product.name}
                    titleTypographyProps={{
                        sx: { fontWeight: 'bold', color: 'primary.dark' }
                    }}
                />
                <div style={{backgroundImage: `url(${product.pictureUrlBlack})`, backgroundSize: `fill` }}>
                    <CardMedia
                        sx={{ height: 140, backgroundSize: 'contain'}}
                        image={product.pictureUrlBlack}
                        title={product.name}
                    />
                </div>
                <CardContent>
                    <Typography gutterBottom color='black' variant="h5">
                        ${(product.price / 100).toFixed(2)}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button sx={{ color: 'primary.dark' }} size="small">Add To Cart</Button>
                    <Button sx={{ color: 'primary.dark' }} component={Link} to={`/catalog/${product.id}`} size="small">View</Button>
                </CardActions>
            </Card>
        </Box>
    )
}