import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import Axios from "axios";
import Navbar from "./Navbar";
//import SingleProduct from "./SingleProduct";

function Products(props) {

    let history = useHistory();
    let path = props.location.pathname.split("/:")
    const baseURL = "http://localhost:8000/"
    const [productsList, setProductsList] = useState([])
    const [ranVariable, setRandVariable] = useState(0)
    const [productData, setProductData] = useState(null)
    const [pageOff, setPageOff] = useState(1)

    useEffect(() => {
        async function fetchProducts(pageOff, limit) {
            try {
                const response = await Axios.get(`http://localhost:8000/products?_page=${pageOff}&_limit=${limit}`, { header: { "Context-Type": "application/json" } })
                setProductsList(response.data)
            }
            catch (err) {
                console.log(err, "from fetchproducts in catch")
            }
        }
        fetchProducts(pageOff, 10)
    }, [ranVariable, pageOff])

    async function callprodetails(productId) {
        try {
            const response = await Axios.get(`http://localhost:8000/products/${productId}`, { headers: { "Content-Type": "application/json" } })
            setProductData(response.data)
        }
        catch (err) {
            console.log(err, "from fetchproducts in catch")
        }
    }

    async function deleteProduct(productId) {
        try {
            Axios.delete(`${baseURL}products/${productId}`, {
                headers: { "Content-Type": "application/json" }
            })
                .then((res) => {
                    // console.log("Deleted Successfully")
                    setRandVariable(productId)
                })
        }
        catch (err) {
            console.log(err, "error in deleteProduct")
        }
    }

    function addProRedirect() {
        props.history.push("/AddProduct/:" + path[1])
    }

    function editProduct(productId) {
        history.push("/Editproduct/:" + path[1] + "&" + productId)
    }

    function gotoPage1() {
        setPageOff(1)
    }

    function gotoPage2() {
        setPageOff(2)
    }

    return (
        <div>
            <Navbar userId={path[1]} usersList={props.usersList} history={props.history} />
            <div className="productsbody">
                <div className="text-center">
                    <button className="btn btn-primary mt-2" onClick={addProRedirect}>Add Product</button>
                </div>
                <div className="d-flex">
                    <div className="productswallbody">
                        {/* {productsList.map((product, index) => <SingleProduct key={index} reload={reload} userId={path[1]} product={product} />)} */}
                        <table className="mt-3 table table-striped table-hover">
                            <thead className="thead-dark">
                                <tr>
                                    <th scope="col">S.No</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">Description</th>
                                    <th scope="col">Price</th>
                                    <th scope="col">Currency</th>
                                    <th scope="col">Click to Edit</th>
                                    <th scope="col">Click to Delete</th>
                                </tr>
                            </thead>
                            <tbody>
                                {productsList.map((product, index) => <tr key={index} onMouseOver={() => callprodetails(product.id)} onMouseOut={() => setProductData(null)}>
                                    <td>{index + 1}</td>
                                    <td>{product.name}</td>
                                    <td>{product.description}</td>
                                    <td>{product.price}</td>
                                    <td>{product.currency}</td>
                                    <td><button className="editbutton btn btn-outline-primary" onClick={() => editProduct(product.id)}>Edit</button></td>
                                    <td><button className="btn btn-outline-danger" onClick={() => deleteProduct(product.id)}>Delete</button></td>
                                </tr>)}
                            </tbody>
                        </table>
                    </div>
                    <div className="singleProduct">
                        {productData && <div>
                            <div className="singleProductbody">
                                <table>
                                    <tbody>
                                        <tr>
                                            <td>ID</td>
                                            <td>{productData.id}</td>
                                        </tr>
                                        <tr>
                                            <td>Name</td>
                                            <td>{productData.name}</td>
                                        </tr>
                                        <tr>
                                            <td>Description</td>
                                            <td>{productData.description}</td>
                                        </tr>
                                        <tr>
                                            <td>Price</td>
                                            <td>{productData.price}</td>
                                        </tr>
                                        <tr>
                                            <td>Currency</td>
                                            <td>{productData.currency}</td>
                                        </tr>
                                        <tr>
                                            <td>Expiry Date</td>
                                            <td>{productData.expiry_date}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        }
                    </div>
                </div>
                <div className="text-center">
                    <button className="btn btn-primary mx-2" onClick={gotoPage1}>1</button>
                    <button className="btn btn-primary" onClick={gotoPage2}>2</button>
                </div>
            </div>

        </div>
    )
}

export default Products