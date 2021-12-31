import React, { useState } from "react";
import shortid from "shortid";
import { useSetRecoilState } from "recoil";
import { useNavigate } from "react-router-dom";
import { productState } from "../../Recoil/Recoil";
import { Button, MenuItem, Select, TextField } from "@mui/material";
import Navigation from "../../Shared/Navigation/Navigation";


const AddProducts = (props) => {
    const navigate = useNavigate()
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [picture, setPicture] = useState("");
    const [type, setType] = useState("");

    const setProducts = useSetRecoilState(productState);

    const onSubmit = (e) => {
        e.preventDefault();
        const new_product = {
            name,
            price,
            picture,
            type,
            id: shortid.generate(),
        };
        setProducts((oldProducts) => [new_product, ...oldProducts]);
        navigate('/')
    };
    return (
        <>
            <Navigation></Navigation>
            <div className="container">

                <div className="section">
                    <div className="card">
                        <div className="card-header">
                            <p className="card-header-title">Add A product</p>
                        </div>
                        <div class="card-content">
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


                                {<Button type="submit" variant="contained">Product Add</Button>}
                            </form>}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AddProducts;
