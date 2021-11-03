import React, { Component } from "react";
import { Link } from "react-router-dom"
import Slideshow from "./Slideshow"

class Pagebody extends Component {
    constructor() {
        super()
        this.openSidebar = this.openSidebar.bind(this)
        this.closeSidebar = this.closeSidebar.bind(this)
        this.sendUserIdtoAlluserspage = this.sendUserIdtoAlluserspage.bind(this)
        this.sendUserIdtoEditpage = this.sendUserIdtoEditpage.bind(this)
    }

    openSidebar() {
        document.getElementById("mySidebar").style.width = "200px";
        document.getElementById("mainBody").style.marginLeft = "200px";
    }

    closeSidebar() {
        document.getElementById("mySidebar").style.width = "0";
        document.getElementById("mainBody").style.marginLeft = "0";
    }

    sendUserIdtoAlluserspage() {
        const userId = this.props.userId;
        this.props.history.push("/AllUsers/:" + userId)
    }

    sendUserIdtoEditpage() {
        const userId = this.props.userId;
        this.props.history.push("/Editprofile/:" + userId)
    }

    render() {
        return (
            <div>
                <div id="mySidebar" className="sidebar">
                    <Link to="#" className="closebtn" onClick={this.closeSidebar}>×</Link>
                    <Link to="#" onClick={this.sendUserIdtoAlluserspage}>Users</Link>
                    <Link to="#" onClick={this.sendUserIdtoEditpage}>Profile</Link>
                </div>

                <div id="mainBody" className="mainBody">
                    <button className="openbtn" onClick={this.openSidebar}>☰ Open Sidebar</button>
                    <Slideshow />
                </div>
            </div>
        )
    }

}

export default Pagebody