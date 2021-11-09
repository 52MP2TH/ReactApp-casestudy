import React, { useState, useEffect } from "react";
import Axios from "axios";
import Navbar from "./Navbar";
import SingleProduct from "./SingleProduct";

function Products(props) {

    const [productsList, setProductsList] = useState([])
    let path = props.location.pathname.split("/:")
    const [ranVariable, setRandVariable] = useState(0)

    useEffect(() => {
        async function fetchProducts() {
            try {
                // Axios.get("http://localhost:8000/products", {
                //     headers: { "Content-Type": "application/json" }
                // })
                //     .then((res) => setProductsList(res.data))
                const response = await Axios.get("http://localhost:8000/products", { header: { "Context-Type": "application/json" } })
                setProductsList(response.data)
            }
            catch (err) {
                console.log(err, "from fetchproducts in catch")
            }
        }
        fetchProducts()
    }, [ranVariable])

    function addProRedirect() {
        props.history.push("/AddProduct/:" + path[1])
    }

    function reload(newranVariable) {
        setRandVariable(newranVariable)
    }

    return (
        <div>
            <Navbar userId={path[1]} usersList={props.usersList} history={props.history} />
            <div className="productsbody">
                <div className="text-center">
                    <button className="btn btn-primary mt-3" onClick={addProRedirect}>Add Product</button>
                </div>
                <div className="productswallbody">
                    {productsList.map((product, index) => <SingleProduct key={index} reload={reload} userId={path[1]} product={product} />)}
                </div>
            </div>
        </div>
    )
}

export default Products