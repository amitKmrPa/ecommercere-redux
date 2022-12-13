import React, { useEffect,useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import getProductsToBuy from "../actions/GetProductForHome";
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActions';
import CardActions from '@mui/material/CardActions';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
function BuyComponent(props) {
    const state = useSelector((state) => state);
    const buyProduct = useDispatch();
    const uId = JSON.parse(localStorage.getItem('userId'));
    const uName = JSON.parse(localStorage.getItem('userName'));
    useEffect(() => {
        buyProduct(getProductsToBuy());
    }, []);
    return (
        <div>
            {props.productId}
            {uId}
            {uName}
        </div>
    );
}

export default BuyComponent;