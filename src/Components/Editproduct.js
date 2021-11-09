import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom"
import Axios from "axios";

function Editproduct(props) {
    const [productData, setProductData] = useState(null)
    const [showUnupdateError, setShowUnupdateError] = useState(false)
    let history = useHistory();
    let path = props.location.pathname.split("/:")[1]
    let pathName = path.split("&")
    //console.log(pathName)
    let userId = pathName[0]
    let productId = Number(pathName[1])
    //console.log(productId)

    useEffect(() => {
        async function fetchProduct() {
            try {
                const response = await Axios.get(`http://localhost:8000/products/${productId}`, { headers: { "Content-Type": "application/json" } })
                setProductData(response.data)
            }
            catch (err) {
                console.log(err, "from fetchproducts in catch")
            }
        }
        fetchProduct()
    }, [])

    function updateProductDetails(e) {
        e.preventDefault();
        let name = e.target.elements.Name.value;
        let description = e.target.elements.description.value;
        let price = e.target.elements.price.value;
        let currency = e.target.elements.currency.value;
        let expiry_date = e.target.elements.expiry_date.value;

        if ((name === "") && (description === "") && (price === "") && (currency === "") && (expiry_date === "")) {
            setShowUnupdateError(true)
        }
        if (name === "") {
            name = productData.name
        }
        if (description === "") {
            description = productData.description
        }
        if (price === "") {
            price = productData.price
        }
        if (currency === "") {
            currency = productData.currency
        }
        if (expiry_date === "") {
            expiry_date = productData.expiry_date
        }

        const updatedProduct = {
            "name": name,
            "description": description,
            "price": price,
            "currency": currency,
            "expiry_date": expiry_date
        }
        // console.log(name)
        // console.log(updatedProduct)

        updateProduct(productId, updatedProduct)

    }

    async function updateProduct(productId, updatedProductDetails) {
        try {
            Axios.put(`http://localhost:8000/products/${productId}`, updatedProductDetails, {
                headers: { "Content-Type": "application/json" }
            })
                .then((res) => {
                    //console.log("update success")
                    history.push("/Products/:" + userId)
                })
        }
        catch (err) {
            console.log(err, "from updateproducts in catch")
        }
    }

    return (
        <div className="container">
            {/* {console.log(productData)} */}
            <h1>Edit product</h1>
            {/* <p>{productData.name}</p>
            {setran(999)}
            {console.log(ran)} */}
            <form className="form-control" onSubmit={updateProductDetails}>
                <div className="mb-2 form-group">
                    <label htmlFor="Name" className="mx-2">Name</label>
                    <input type="text" name="Name" placeholder={productData && productData.name} defaultValue={productData && productData.name} />
                </div>
                <div className="mb-2 form-group">
                    <label htmlFor="description" className="mx-2">Description</label>
                    <input type="text" name="description" placeholder={productData && productData.description} defaultValue={productData && productData.description} />
                </div>
                <div className="mb-2 form-group">
                    <label htmlFor="price" className="mx-2">Price</label>
                    <input type="text" name="price" placeholder={productData && productData.price} defaultValue={productData && productData.price} />
                </div>
                <div className="mb-2 form-group">
                    <label htmlFor="currency" className="mx-2">Currency</label>
                    <input type="text" name="currency" placeholder={productData && productData.currency} defaultValue={productData && productData.currency} />
                </div>
                <div className="mb-2 form-group">
                    <label htmlFor="expiry_date" className="mx-2">Expiry Date</label>
                    <input type="text" name="expiry_date" placeholder={productData && productData.expiry_date} defaultValue={productData && productData.expiry_date} />
                </div>
                <div className="text-center">
                    <button type="submit" className="btn btn-outline-primary">Update</button>
                </div>
                {showUnupdateError && <p className="errorText">Please enter any new value</p>}
            </form>
        </div>
    )
}

export default Editproduct