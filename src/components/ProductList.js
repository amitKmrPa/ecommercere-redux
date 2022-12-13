import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import getProducts from "../actions/GetProductForHome";
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActions';
import CardActions from '@mui/material/CardActions';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import BuyComponent from "./BuyComponent";

let ProductList = () => {
    const state = useSelector((state) => state);
    const [comSwitch, setComponent] = useState(1);
    const getAllProducts = useDispatch();
    useEffect(() => {
        getAllProducts(getProducts());
    }, []);
    const [uId, setUId] = useState("");
    const [uName, setUName] = useState("");
    const [productId, setProductId] = useState("");
    const buyProduct = (productId) => {
        if (uId) {
            setProductId(productId);
            setComponent(2);
        } else {
           alert("Please Login First!"); 
        }

    }
    useEffect(() => {
        const uId = JSON.parse(localStorage.getItem('userId'));
        const uName = JSON.parse(localStorage.getItem('userName'));
        if (uId && uName) {
            setUId(uId);
            setUName(uName);
        }
    }, []);
    return (
        <div
            className="e-card e-card-horizontal"
            style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: "center",
                justifyContent: 'center',
            }}>
            <Grid sx={{ flexGrow: 1 }} container spacing={2}  >
                <Grid item xs={12}>
                    <Grid container justifyContent="center" spacing={2}>
                        {state.productData.products.data && comSwitch === 1 &&
                            state.productData.products.data.map(
                                (element) => (
                                    <Grid key={element} item>
                                        <Card sx={{ maxWidth: 400 }} style={{
                                            backgroundColor: 'none'
                                        }}>
                                            <CardActionArea>
                                                <CardMedia
                                                    component="img"
                                                    height="140"
                                                    alt="green iguana"
                                                    image={require('../product/images/' + element.productImgId)}
                                                />
                                                <CardContent sx={{ minWidth: 145 }}>
                                                    <Typography gutterBottom variant="h5" component="div">
                                                        {element.productName}
                                                    </Typography>
                                                    <Typography variant="body2" color="text.secondary">
                                                        <label>Price: {element.price}</label>
                                                    </Typography>
                                                    <Typography variant="body2" color="text.secondary">
                                                        <label>only {element.quantity} left!</label>
                                                    </Typography>
                                                    <Typography variant="body2" color="text.secondary">
                                                        <label>Type: {element.productType}</label>
                                                    </Typography>
                                                </CardContent>
                                            </CardActionArea>
                                            <CardActions>
                                                <Button size="small" color="primary" style={{}} value={element.productId} onClick={() => buyProduct(element.productId)} >
                                                    Buy
                                                </Button>
                                                <Button size="small" color="primary"  >
                                                    Add to Cart
                                                </Button>
                                            </CardActions>
                                        </Card>
                                    </Grid>
                                ))}
                        {comSwitch === 2 && <BuyComponent productId={productId} />}
                    </Grid>
                </Grid>
            </Grid>
        </div>
    );
}
export default ProductList;