import React, { Component } from "react";
import Navbar from "./Navbar";
import UsercardDisplay from "./UsercardDisplay";

class Editprofile extends Component {
    constructor() {
        super()
        this.deleteUserId = this.deleteUserId.bind(this)

    }
    deleteUserId() {
        let path = window.location.href
        let userId = path.split("/:")[1]
        this.props.onDeleteUser(userId)
    }

    render() {
        let path = window.location.href
        let pathUserId = path.split("/:")[1]
        const user = this.props.usersList.filter(userData => userData.id === parseInt(pathUserId))
        return (
            <div>
                <Navbar userId={pathUserId} usersList={this.props.usersList} history={this.props.history} />
                <div className="container mt-2 editpagebody">
                    <h3>You can Update your Profile here..</h3>
                    <div className="row">
                        <div className="col">
                            <UsercardDisplay addTodoUser={this.props.addTodoUser} userData={user[0]} />
                        </div>
                        <div className="col editform">
                            <form className="form-control">
                                <div className="mb-2 form-group">
                                    <label htmlFor="firstName" className="mx-2">First Name</label>
                                    <input type="text" name="firstName" className="editFirstName" placeholder={user[0].firstName} />
                                </div>
                                <div className="mb-2 form-group">
                                    <label htmlFor="lastName" className="mx-2">Last Name</label>
                                    <input type="text" name="lastName" className="editLastName" placeholder={user[0].lastName} />
                                </div>
                                <div className="mb-2 form-group">
                                    <label htmlFor="profileLink" className="mx-2">Profile Link</label>
                                    <input type="text" name="profileLink" className="editProfileLink" placeholder={user[0].profileLink} />
                                </div>
                                <div className="mb-2 form-group">
                                    <label htmlFor="description" className="mx-2">Description</label>
                                    <input type="text" name="description" className="editProfileLink" placeholder={user[0].description} />
                                </div>
                                <button className="btn btn-primary updatebutton mt-3">Update</button>
                                <button className="btn btn-danger mt-3" onClick={this.deleteUserId}>Delete</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Editprofile