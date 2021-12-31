import React from 'react';
import { Button, Card, CardContent, Grid, Typography } from '@mui/material';
import { useRecoilState } from 'recoil';
import { productState } from '../../Recoil/Recoil';
import { Link } from 'react-router-dom';
import View from '../Home/View';

const ProductShow = (props) => {
    const { name, price, picture, type, id } = props.product
    const [productDlt, setProductDlt] = useRecoilState(productState)
    const deleteProduct = id => {
        const new_product = productDlt.filter(product => product.id !== id)
        setProductDlt(new_product)
    }
    return (
        <>
            <View>
                <Grid item xs={12}>

                    <Card className="bg-dark text-white p-3">


                        <CardContent >
                            <Typography variant="h6">
                                {picture}
                            </Typography>
                            <Typography variant="h6">
                                {name}
                            </Typography>
                            <Typography variant="h6">
                                {type}
                            </Typography>
                            <Typography variant="h6">
                                ${price}/kg
                            </Typography>
                            <div style={{
                                display: "flex",
                                justifyContent: "space-between",
                                padding: ""
                            }}>
                                <Typography variant="h4">
                                    <Link to={`/editProducts/${id}`}> <Button variant="contained">Edit Item</Button></Link>
                                </Typography>

                                <Typography variant="h4">
                                    <Button onClick={() => deleteProduct(id)} variant="contained">Delete</Button>
                                </Typography>
                            </div>

                        </CardContent>

                    </Card>
                </Grid>
            </View>

        </>
    );
};

export default ProductShow;