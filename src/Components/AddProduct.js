import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom"
import Title from "./Title";

function AddProduct() {
    let path = window.location.href
    let pathUserId = path.split("/:")[1]
    let history = useHistory()
    const [showAddprosuccess, setShowAddprosuccess] = useState(false)

    function handleSubmit(e) {
        e.preventDefault();
        const newProduct = {
            "name": e.target.elements.Name.value,
            "description": e.target.elements.description.value,
            "price": e.target.elements.price.value,
            "currency": e.target.elements.currency.value,
            "expiry_date": "2026-10-31"
        }
        async function addProduct() {
            try {
                axios.post("http://localhost:8000/products", newProduct)
                    .then((res) => {
                        setShowAddprosuccess(true)
                        console.log("product added successfully")
                    })
            }
            catch (err) {
                console.log(err, "from fetchproducts in catch")
            }
        }
        addProduct()
    }


    function gotoProductspage() {
        history.push("/Products/:" + pathUserId)
    }

    return (
        <div className="container addProductpage mt-3">
            <div className="addprotitle">
                <Title title={' You can Add New Product here..'} />
            </div>
            <form className="form-control mt-2" onSubmit={handleSubmit}>
                <div className="mb-2 form-group">
                    <label htmlFor="Name" className="mx-2">Name of the Product</label>
                    <input type="text" name="Name" placeholder="Name of the product" required />
                </div>
                <div className="mb-2 form-group">
                    <label htmlFor="description" className="mx-2">Description</label>
                    <input type="text" name="description" placeholder="Description" required />
                </div>
                <div className="mb-2 form-group">
                    <label htmlFor="price" className="mx-2">Price</label>
                    <input type="text" name="price" placeholder="Price" required />
                </div>
                <div className="mb-2 form-group">
                    <label htmlFor="currency" className="mx-2">Currency</label>
                    <input type="text" name="currency" placeholder="Currency" required />
                </div>
                <div className="mb-2 form-group">
                    <label htmlFor="expiry_date" className="mx-2">Expiry Date</label>
                    <input type="text" name="expiry_date" placeholder="Expiry date" required />
                </div>
                <div className="text-center mt-2">
                    <button type="submit" className="btn btn-outline-success mx-2">Add</button>
                    <button onClick={gotoProductspage} className="btn btn-outline-primary">Goto Products</button>
                </div>
            </form>
            <div className="text-center mt-3">
                {showAddprosuccess && <p className="fs-3 productadded">New Product added successfully</p>}
            </div>
        </div>
    )
}

export default AddProduct