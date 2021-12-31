import React, { useState, useEffect } from "react";
import { useRecoilState } from "recoil";
import { useNavigate, useParams } from "react-router-dom";
import { productState } from "../../Recoil/Recoil";
import { Button, MenuItem, Select, TextField } from "@mui/material";
import Navigation from "../../Shared/Navigation/Navigation";


const EditProducts = (props) => {
    const navigate = useNavigate()
    const { id } = useParams()
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [picture, setPicture] = useState("");
    const [type, setType] = useState("");

    const [products, setProducts] = useRecoilState(productState)

    const onSubmit = (e) => {
        e.preventDefault();
        const new_product = {
            name,
            price,
            picture,
            type,
            id,
        };
        const updated_products = products.map((product) =>
            product.id === id ? new_product : product
        );
        setProducts(updated_products);
        navigate('/')
    };
    // useEffect(() => {
    //     // load product
    //     const pd = products.find((product) => product.id === id);
    //     setName(pd.name);
    //     setPrice(pd.price);
    //     setPicture(pd.picture);
    //     setType(pd.type);
    // }, []);
    return (
        <>
            <Navigation></Navigation>
            <p className="card-header-title">Update A product</p>

            {<form onSubmit={onSubmit}>

                <TextField
                    id="outlined-size-small"
                    sx={{ width: "90%", m: 1 }}
                    label="Product Name"
                    size="small"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <TextField
                    id="outlined-size-small"
                    sx={{ width: "90%", m: 1 }}
                    label="Product Price"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    size="small"
                />
                <TextField
                    id="outlined-size-small"
                    sx={{ width: "90%", m: 1 }}
                    label="Product Picture"
                    value={picture}
                    onChange={(e) => setPicture(e.target.value)}
                    size="small"
                />
                <Select sx={{ width: "90%", m: 1 }}
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={type}
                    onChange={(e) => setType(e.target.value)}
                    label="type"
                    defaultValue="Ten"

                >
                    <MenuItem value="fruits">Fruits</MenuItem>
                    <MenuItem value="vegetables">Vegetables</MenuItem>
                    <MenuItem value="beverages">Beverages</MenuItem>
                    <MenuItem value="meals">Meals</MenuItem>
                    <MenuItem value="utensils">Utensils</MenuItem>

                </Select>
                <br />


                {<Button type="submit" variant="contained">Update Product</Button>}
            </form>}


        </>
    );
};

export default EditProducts;
