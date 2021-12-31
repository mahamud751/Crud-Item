import { Grid } from '@mui/material';
import React from 'react';
import { useRecoilValue } from 'recoil';
import { filteredProducts } from '../../Recoil/Recoil';
import ProductShow from './ProductShow';

const Products = () => {

    const products = useRecoilValue(filteredProducts)

    return (
        <div>

            <Grid container spacing={4} className="mt-4">
                {
                    products.map((product) => (
                        <ProductShow product={product} key={product.id} />
                    ))
                }
            </Grid>


        </div >
    );
};

export default Products;