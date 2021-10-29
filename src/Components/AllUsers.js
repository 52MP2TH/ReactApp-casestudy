import React, { Component } from "react";
import Navbar from "./Navbar";
import UsercardDisplay from "./UsercardDisplay";

class AllUsers extends Component {

    render() {
        let path = this.props.location.pathname.split("/:")
        return (
            <div className="allusersdisplay">
                <Navbar userId={path[1]} usersList={this.props.usersList} history={this.props.history} />
                <div className="container mt-2 card-display col-6">
                    {this.props.usersList
                        .sort(function (x, y) {
                            return y.id - x.id
                        })
                        .map((userData, index) => <UsercardDisplay key={index} addTodoUser={this.props.addTodoUser} userData={userData} />)}
                </div>
            </div>
        )
    }
}

export default AllUsers