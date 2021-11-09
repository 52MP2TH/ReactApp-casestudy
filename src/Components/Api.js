//import React, { useState } from "react";
import { useHistory } from "react-router-dom"
import axios from "axios";

const baseURL = "http://localhost:8000/";

export const fetchProducts = async () => {
    try {
        return axios.get(`${baseURL}products`, {
            headers: { "Content-Type": "application/json" }
        })
            .then((res) => { return res.data })
    }
    catch (err) {
        console.log(err, "from fetchproducts in catch")
    }
}

export const fetchProductwithId = async (productId) => {
    try {
        return axios.get(`http://localhost:8000/products/${productId}`, {
            headers: { "Content-Type": "application/json" }
        })
            .then((res) => { return res.data })
    }
    catch (err) {
        console.log(err, "from fetchproducts in catch")
    }
}

export const addProduct = async (newProduct) => {
    try {
        axios.post("http://localhost:8000/products", newProduct)
            .then((res) => {
                console.log("product added successfully")
            })
    }
    catch (err) {
        console.log(err, "from fetchproducts in catch")
    }
}

export const updateProduct = async (productId, updatedProductDetails) => {
    try {
        //let history = useHistory()
        return axios.put(`${baseURL}products/${productId}`, updatedProductDetails, {
            headers: { "Content-Type": "application/json" }
        })
            .then((res) => {
                console.log("update success")
                //history.push("/Products/:" + userId)
            })
    }
    catch (err) {
        console.log(err, "from updateproducts in catch")
    }
}

export const deleteProduct = async (productId) => {
    try {
        return axios.delete(`${baseURL}products/${productId}`, {
            headers: { "Content-Type": "application/json" }
        })
            .then((res) => {
                console.log("Deleted Successfully")
                //props.reload(productId)
            })
    }
    catch (err) {
        console.log(err, "error in deleteProduct")
    }
}

