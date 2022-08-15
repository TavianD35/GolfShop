import { Add, Delete, Remove } from "@mui/icons-material";
import { LoadingButton } from "@mui/lab";
import { Box, Button, Grid, IconButton, Paper, styled, Table, TableBody, TableCell, tableCellClasses, TableContainer, TableHead, TableRow, Typography } from "@mui/material";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import agent from "../../app/api/agent";
import { useStoreContext } from "../../app/context/StoreContext";
import BasketSummary from "./BasketSummary";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: '#212121',
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));


export default function BasketPage() {
    const { basket, setBasket, removeItem } = useStoreContext();
    const [status, setStatus] = useState({
        loading: false,
        name: ''
    });

    function handleAddItem(productId: number, name: string) {
        setStatus({ loading: true, name });
        agent.Basket.addItem(productId)
            .then(basket => setBasket(basket))
            .catch(error => console.log(error))
            .finally(() => setStatus({ loading: false, name: '' }))
    }

    function handleRemoveItem(productId: number, name: string, quantity = 1) {
        setStatus({ loading: true, name });
        agent.Basket.removeItem(productId, quantity)
            .then(() => removeItem(productId, quantity))
            .catch(error => console.log(error))
            .finally(() => setStatus({ loading: false, name: '' }))
    }


    if (!basket) return <Typography variant='h3'>Your basket is empty</Typography>

    return (
        <>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 700 }}>
                    <TableHead>
                        <TableRow>
                            <StyledTableCell>Product</StyledTableCell>
                            <StyledTableCell align="right">Price</StyledTableCell>
                            <StyledTableCell align="center">Quantity</StyledTableCell>
                            <StyledTableCell align="right">Subtotal</StyledTableCell>
                            <StyledTableCell align="right"></StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {basket.items.map(item => (
                            <StyledTableRow key={item.name}>
                                <StyledTableCell component="th" scope="row">
                                    <Box display='flex' alignItems='center'>
                                        <NavLink to ={`/catalog/${item.productId}`}>
                                            <img src={item.pictureUrlBlack} alt={item.name} style={{ height: 50, marginRight: 20 }} />
                                        </NavLink>
                                        <span>{item.name}</span>
                                    </Box>
                                </StyledTableCell>
                                <StyledTableCell align="right">${(item.price / 100).toFixed(2)}</StyledTableCell>
                                <StyledTableCell align="center">
                                    <LoadingButton
                                        loading={status.loading && status.name === 'rem' + item.productId}
                                        onClick={() => handleRemoveItem(item.productId, 'rem' + item.productId, 1)}
                                        color='error'>
                                        <Remove />
                                    </LoadingButton>
                                    {item.quantity}
                                    <LoadingButton
                                        loading={status.loading && status.name === 'add' + item.productId}
                                        onClick={() => handleAddItem(item.productId, 'add' + item.productId)}
                                        color='success'>
                                        <Add />
                                    </LoadingButton>
                                </StyledTableCell>
                                <StyledTableCell align="right">${((item.price / 100) * item.quantity).toFixed(2)}</StyledTableCell>
                                <StyledTableCell align="right">
                                    <LoadingButton
                                        loading={status.loading && status.name === 'del' + item.productId}
                                        onClick={() => handleRemoveItem(item.productId, 'del' + item.productId, item.quantity)}
                                        color='error'>
                                        <Delete />
                                    </LoadingButton>
                                </StyledTableCell>
                            </StyledTableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <Grid container>
                <Grid item xs={6} />
                <Grid item xs={6}>
                    <BasketSummary />
                    <Button
                        component={Link}
                        to='/checkout'
                        variant='contained'
                        size='large'
                        fullWidth
                        color='success'
                    >
                        Checkout
                    </Button>
                </Grid>
            </Grid>
        </>

    )
}