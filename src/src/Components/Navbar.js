import React, { Component } from "react";

class Navbar extends Component {
    constructor() {
        super()
        this.search = this.search.bind(this)
        this.logout = this.logout.bind(this);
    }

    search(e) {
        e.preventDefault()
        const searchInput = e.target.elements.searchInput.value
        this.props.history.push("/FilteredUsers/:" + this.props.userId + "&" + searchInput)

    }

    logout() {
        let history = this.props.history;
        history.push("/");
    }

    render() {
        const user = this.props.usersList.filter(userData => userData.id === parseInt(this.props.userId))
        return (
            <div>
                <nav className="navbar narbar-light bg-light">
                    <div className="container-fluid">
                        <h4 className="navbarhead">Hi, {user[0].firstName} {user[0].lastName} </h4>
                        <form className="d-flex" onSubmit={this.search}>
                            <input type="search" placeholder="Search with First Name" id="searchInput" />
                            <button type="submit" className="btn btn-outline-primary"><i className="fas fa-search"></i></button>
                        </form>
                        <button type="submit" className="btn btn-warning" onClick={this.logout}>Logout</button>
                    </div>
                </nav>
            </div >
        )
    }
}

export default Navbar