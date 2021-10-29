import React from "react"
import { useHistory } from "react-router-dom"

function PageNotFound() {

    let history = useHistory();
    function gotoHomepage() {
        history.push("/")
    }

    return (
        <div className="container mt-3">
            <h1 className="errorText">Page Not Found 404</h1>
            <div className="text-center">
                <button className="btn btn-primary px-4" type="submit" onClick={gotoHomepage}>Goto Home</button>
            </div>
            <img className="errorImage mt-1" src="https://drudesk.com/sites/default/files/2018-02/404-error-page-not-found.jpg" alt="Page not found" />
        </div>
    )
}

export default PageNotFound