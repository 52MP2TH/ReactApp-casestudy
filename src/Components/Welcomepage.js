import React, { Component } from "react";
import Navbar from "./Navbar";
import Pagebody from "./Pagebody";

class Welcomepage extends Component {
    render() {
        let path = this.props.location.pathname.split("/:")
        return (
            <div>
                {console.log(this.props.usersList)}
                <Navbar userId={path[1]} usersList={this.props.usersList} history={this.props.history} />
                <Pagebody userId={path[1]} usersList={this.props.usersList} history={this.props.history} />
            </div >
        )
    }
}

export default Welcomepage