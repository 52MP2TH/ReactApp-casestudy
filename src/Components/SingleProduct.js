import React from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
function SingleProduct(props) {
    const productDetails = props.product
    let history = useHistory();
    const baseURL = "http://localhost:8000/"
    const productId = productDetails.id

    function editProduct() {
        history.push("/Editproduct/:" + props.userId + "&" + productId)
    }

    async function deleteProduct() {
        try {
            axios.delete(`${baseURL}products/${productId}`, {
                headers: { "Content-Type": "application/json" }
            })
                .then((res) => {
                    console.log("Deleted Successfully")
                    props.reload(productId)
                })
        }
        catch (err) {
            console.log(err, "error in deleteProduct")
        }
    }

    return (
        <div className="singleProduct">
            <div className="container singleProductbody">
                <table>
                    <tbody>
                        <tr>
                            <td>ID</td>
                            <td>{productDetails.id}</td>
                        </tr>
                        <tr>
                            <td>Name</td>
                            <td>{productDetails.name}</td>
                        </tr>
                        <tr>
                            <td>Description</td>
                            <td>{productDetails.description}</td>
                        </tr>
                        <tr>
                            <td>Price</td>
                            <td>{productDetails.price}</td>
                        </tr>
                        <tr>
                            <td>Currency</td>
                            <td>{productDetails.currency}</td>
                        </tr>
                        <tr>
                            <td>Expiry Date</td>
                            <td>{productDetails.expiry_date}</td>
                        </tr>
                    </tbody>
                </table>
                <button className="editbutton btn btn-outline-primary" onClick={editProduct}>Edit</button>
                <button className="deletebutton btn btn-outline-danger" onClick={deleteProduct}>Delete</button>
            </div>
        </div>
    )
}

export default SingleProduct