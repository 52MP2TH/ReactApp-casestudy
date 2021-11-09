import React, { Component } from "react";
import { Link } from "react-router-dom"
import Navbar from "./Navbar";
import UsercardDisplay from "./UsercardDisplay";

class AllUsers extends Component {
    constructor() {
        super()
        this.openSidebar = this.openSidebar.bind(this)
        this.closeSidebar = this.closeSidebar.bind(this)
        this.sendUserIdtoEditpage = this.sendUserIdtoEditpage.bind(this)
    }

    openSidebar() {
        document.getElementById("mySidebar").style.width = "200px";
        document.getElementById("allusersBody").style.marginLeft = "200px";
    }

    closeSidebar() {
        document.getElementById("mySidebar").style.width = "0";
        document.getElementById("allusersBody").style.marginLeft = "0";
    }

    sendUserIdtoEditpage() {
        let path = this.props.location.pathname.split("/:")
        this.props.history.push("/Editprofile/:" + path[1])
    }

    render() {
        let path = this.props.location.pathname.split("/:")
        return (
            <div>
                <Navbar userId={path[1]} usersList={this.props.usersList} history={this.props.history} />
                <div id="mySidebar" className="sidebar">
                    <Link to="#" className="closebtn" onClick={this.closeSidebar}>×</Link>
                    <Link to="#" onClick={this.sendUserIdtoEditpage}>Profile</Link>
                </div>

                <div className="allusersdisplay">
                    <div id="allusersBody">
                        <button className="openbtn" onClick={this.openSidebar}>☰ Open Sidebar</button>
                        <div className="container mt-2 card-display col-6">
                            {this.props.usersList.map((userData, index) => <UsercardDisplay key={index} addTodoUser={this.props.addTodoUser} userData={userData} index={index} />)}
                        </div>
                    </div>
                </div>
            </div >
        )
    }
}

export default AllUsers