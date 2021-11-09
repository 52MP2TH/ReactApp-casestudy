import React from "react"
import { Link } from "react-router-dom"
import Navbar from "./Navbar";
import UsercardDisplay from "./UsercardDisplay";

function FilteredUsers(props) {

    const path = props.location.pathname.split("/:")[1].split("&")
    const userId = path[0]
    const filterfirstName = path[1]
    const filteredUsersList = props.usersList.filter((userData) => userData.firstName === filterfirstName)
    //console.log(userId, "userId", filterfirstName, "filfirstname", filteredUsersList.length, "length")
    function openSidebar() {
        document.getElementById("mySidebar").style.width = "200px";
        document.getElementById("filterusersBody").style.marginLeft = "200px";
    }

    function closeSidebar() {
        document.getElementById("mySidebar").style.width = "0";
        document.getElementById("filterusersBody").style.marginLeft = "0";
    }

    function sendUserIdtoAlluserspage() {
        props.history.push("/AllUsers/:" + userId)
    }

    function sendUserIdtoEditpage() {
        props.history.push("/Editprofile/:" + userId)
    }

    return (
        <div>
            <Navbar userId={userId[0]} usersList={props.usersList} history={props.history} />
            <div id="mySidebar" className="sidebar">
                <Link to="#" className="closebtn" onClick={closeSidebar}>×</Link>
                <Link to="#" onClick={sendUserIdtoAlluserspage}>Users</Link>
                <Link to="#" onClick={sendUserIdtoEditpage}>Profile</Link>
            </div>

            <div className="filterusersdisplay">
                <div id="filterusersBody">
                    <button className="openbtn" onClick={openSidebar}>☰ Open Sidebar</button>
                    <div className="container mt-2 card-display col-6">
                        {filteredUsersList.length === 0 ?
                            <div className="nouserfound">
                                <h3 className="errorText">Sorry, this user doesn't seem to exist, Please enter correct user First name</h3>
                                <img src="https://pbs.twimg.com/profile_images/1183307306995306496/P1K5Kt_5_400x400.jpg" alt="No users" />
                            </div>
                            :
                            <div>
                                {filteredUsersList.map((userData, index) => <UsercardDisplay key={index} addTodoUser={props.addTodoUser} userData={userData} index={index} />)}
                            </div>
                        }
                    </div>
                </div>
            </div>
        </div >
    )
}

export default FilteredUsers