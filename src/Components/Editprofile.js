import React, { useState } from "react";
import Navbar from "./Navbar";
import UsercardDisplay from "./UsercardDisplay";

function Editprofile(props) {

    let path = window.location.href
    let pathUserId = path.split("/:")[1]
    const user = props.usersList.filter(userData => userData.id === parseInt(pathUserId))
    const [newFirstName, setNewFirstName] = useState(user[0].firstName)
    const [newLastName, setNewLastName] = useState(user[0].lastName)
    const [newProfileLink, setNewProfileLink] = useState(user[0].profileLink)
    const [newDescription, setNewDescription] = useState(user[0].description)
    const [showUpdateError, setShowUpdateError] = useState(false)

    function updateUserwithId(e) {
        e.preventDefault();
        if ((newFirstName === user[0].firstName) && (newLastName === user[0].lastName) && (newProfileLink === user[0].profileLink) && (newDescription === user[0].description)) {
            setShowUpdateError(true)
        }
        else if ((newFirstName === "") && (newLastName === "") && (newProfileLink === "") && (newDescription === "")) {
            setShowUpdateError(true)
            console.log("in else-if of update")
        }
        else {
            setShowUpdateError(false)
            console.log("in else of update")
            if (newFirstName === "") {
                setNewFirstName(user[0].firstName)
            }
            if (newLastName === "") {
                setNewLastName(user[0].lastName)
            }
            if (newProfileLink === "") {
                setNewProfileLink(user[0].profileLink)
            }
            if (newDescription === "") {
                setNewDescription(user[0].description)
            }
            const newUser = {
                id: user[0].id,
                userEmail: user[0].userEmail,
                password: user[0].password,
                firstName: newFirstName,
                lastName: newLastName,
                profileLink: newProfileLink,
                description: newDescription,
                todo_list: user[0].todo_list
            }
            props.onDeleteUserForUpdate(pathUserId)
            //props.onAddUser(newUser);
            console.log(props.usersList, "before going to welcome page")
            props.history.push("/Welcomepage/:" + newUser.id)
            console.log(props.usersList, "after welcomepage rendering")
        }
    }

    function deleteUserwithId() {
        props.onDeleteUser(pathUserId)
    }

    return (
        <div>
            <Navbar userId={pathUserId} usersList={props.usersList} history={props.history} />
            <div className="container mt-2 editpagebody">
                <h3>You can Update your Profile here..</h3>
                <div className="row">
                    <div className="col editcard">
                        <UsercardDisplay addTodoUser={props.addTodoUser} userData={user[0]} />
                    </div>
                    <div className="col editform">
                        <form className="form-control">
                            <div className="mb-2 form-group mt-4">
                                <label htmlFor="firstName" className="mx-2">First Name</label>
                                <input type="text" name="firstName" className="editFirstName" onChange={(e) => setNewFirstName(e.target.value)} onBlur={(e) => setNewFirstName(e.target.value)} placeholder={user[0].firstName} />
                            </div>
                            <div className="mb-2 form-group">
                                <label htmlFor="lastName" className="mx-2">Last Name</label>
                                <input type="text" name="lastName" className="editLastName" onChange={(e) => setNewLastName(e.target.value)} onBlur={(e) => setNewLastName(e.target.value)} placeholder={user[0].lastName} />
                            </div>
                            <div className="mb-2 form-group">
                                <label htmlFor="profileLink" className="mx-2">Profile Link</label>
                                <input type="text" name="profileLink" className="editProfileLink" onChange={(e) => setNewProfileLink(e.target.value)} onBlur={(e) => setNewProfileLink(e.target.value)} placeholder={user[0].profileLink} />
                            </div>
                            <div className="mb-2 form-group">
                                <label htmlFor="description" className="mx-2">Description</label>
                                <input type="text" name="description" className="editDescription" onChange={(e) => setNewDescription(e.target.value)} onBlur={(e) => setNewDescription(e.target.value)} placeholder={user[0].description} />
                            </div>
                            <div className="mb-3">
                                <button type="submit" className="btn btn-primary updatebutton mt-3" onClick={updateUserwithId}>Update</button>
                                <button type="submit" className="btn btn-danger mt-3" onClick={deleteUserwithId}>Delete</button>
                                {showUpdateError && <p className="errorText mt-1 text-center">Please enter new data to update</p>}
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Editprofile