import { Add, Delete, Remove } from "@mui/icons-material";
import { LoadingButton } from "@mui/lab";
import { Box, Button, Grid, Paper, styled, Table, TableBody, TableCell, tableCellClasses, TableContainer, TableHead, TableRow, Typography } from "@mui/material";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import agent from "../../app/api/agent";
import { useAppDispatch, useAppSelector } from "../../app/store/configureStore";
import { addBasketItemAsync, removeBasketItemAsync, setBasket } from "./basketSlice";
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
    const { basket, status } = useAppSelector(state => state.basket);
    const dispatch = useAppDispatch();


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
                                        <NavLink to={`/catalog/${item.productId}`}>
                                            <img src={item.pictureUrlBlack} alt={item.name} style={{ height: 50, marginRight: 20 }} />
                                        </NavLink>
                                        <span>{item.name}</span>
                                    </Box>
                                </StyledTableCell>
                                <StyledTableCell align="right">${(item.price / 100).toFixed(2)}</StyledTableCell>
                                <StyledTableCell align="center">
                                    <LoadingButton
                                        loading={status === 'pendingRemoveItem' + item.productId + 'rem'}
                                        onClick={() => dispatch(removeBasketItemAsync({
                                            productId: item.productId,
                                            quantity: 1,
                                            name: 'rem'
                                        }))}
                                        color='error'>
                                        <Remove />
                                    </LoadingButton>
                                    {item.quantity}
                                    <LoadingButton
                                        loading={status === 'pendingAddItem' + item.productId}
                                        onClick={() => dispatch(addBasketItemAsync({ productId: item.productId }))}
                                        color='success'>
                                        <Add />
                                    </LoadingButton>
                                </StyledTableCell>
                                <StyledTableCell align="right">${((item.price / 100) * item.quantity).toFixed(2)}</StyledTableCell>
                                <StyledTableCell align="right">
                                    <LoadingButton
                                        loading={status === 'pendingRemoveItem' + item.productId + 'del'}
                                        onClick={() => dispatch(removeBasketItemAsync({
                                            productId: item.productId,
                                            quantity: item.quantity,
                                            name: 'del'
                                        }))}
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