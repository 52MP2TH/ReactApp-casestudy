import React, { Component } from "react";

class Editprofile extends Component {
    // constructor() {
    //     super()

    // }
    render() {
        let path = window.location.href
        let pathUserId = path.split("/:")[1]
        const user = this.props.usersList.filter(userData => userData.id === parseInt(pathUserId))
        return (
            <div className="container mt-2">
                <h3>You can edit your Profile here..</h3>
                <form>
                    <input type="text" className="editFirstName" placeholder={user[0].firstName} />
                    <input type="text" className="editLastName" placeholder={user[0].lastName} />
                </form>
            </div>)
    }
}

export default Editprofile