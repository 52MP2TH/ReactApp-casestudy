import React, { Component } from "react";
import { Link } from "react-router-dom";
import Title from "./Title";

class Registerpage extends Component {
    constructor() {
        super()
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        const userEmail = event.target.elements.userEmail.value;
        const password = event.target.elements.password.value;
        const confirmPassword = event.target.elements.confirmPassword.value;
        const firstName = event.target.elements.firstName.value;
        const lastName = event.target.elements.lastName.value;
        const profileLink = event.target.elements.profileLink.value;
        if (!(password === confirmPassword)) {
            console.log("Password and Confirm password should be same");
            this.props.history.push("/Registerpage")

        }
        else {
            const newUser = {
                id: Number(new Date()),
                userEmail: userEmail,
                password: password,
                firstName: firstName,
                lastName: lastName,
                profileLink: profileLink
            }
            this.props.onAddUser(newUser);
        }

    }

    render() {
        return (
            <div className="container mt-3">
                <Title title={'Register here..'} />
                <form className="form-control" onSubmit={this.handleSubmit}>
                    <div className="mb-2 form-group">
                        <label htmlFor="userEmail" className="mx-2">Email ID</label>
                        <input type="email" name="userEmail" placeholder="Mail ID" required />
                    </div>
                    <div className="mb-2 form-group">
                        <label htmlFor="password" className="mx-2">Password</label>
                        <input type="password" name="password" placeholder="Password" required />
                    </div>
                    <div className="mb-2 form-group">
                        <label htmlFor="confirmPassword" className="mx-2">Confirm Password</label>
                        <input type="password" name="confirmPassword" placeholder="Confirm Password" required />
                    </div>
                    <div className="mb-2 form-group">
                        <label htmlFor="firstName" className="mx-2">First Name</label>
                        <input type="text" name="firstName" placeholder="First Name" required />
                    </div>
                    <div className="mb-2 form-group">
                        <label htmlFor="lastName" className="mx-2">Last Name</label>
                        <input type="text" name="lastName" placeholder="Last Name" required />
                    </div>
                    <div className="mb-2 form-group">
                        <label htmlFor="profileLink" className="mx-2">Upload your Profic Pic here</label>
                        <input type="text" name="profileLink" />
                    </div>
                    <button type="submit" className="btn btn-primary mb-2">Submit</button>
                    <div>
                        <p>Already existing User? <Link to="/Loginpage">Login</Link></p>
                    </div>
                </form>
            </div>)

    }

}

// function Registerpage(usersList) {

//     let history = useHistory();

//     function addUser(event) {
//         event.preventDefault();
//         const userEmail = event.target.elements.userEmail.value;
//         const password = event.target.elements.password.value;
//         const confirmPassword = event.target.elements.confirmPassword.value;
//         const firstName = event.target.elements.firstName.value;
//         const lastName = event.target.elements.lastName.value;
//         const profileLink = event.target.elements.profileLink.value;
//         if (!(password === confirmPassword)) {
//             console.log("Password and Confirm password should be same");
//             history.push("/Registerpage")

//         }
//         else {
//             const newUser = {
//                 id: Number(new Date()),
//                 userEmail: userEmail,
//                 password: password,
//                 firstName: firstName,
//                 lastName: lastName,
//                 profileLink: profileLink
//             }
//             usersList.push(newUser);
//             //setAddedUsersList({ ...addedUsersList, ...newUser })
//             console.log(newUser)
//             console.log(usersList)
//         }

//     }

//     return (
//         <div className="container">
//             <Title title={'Register here..'} />
//             <form className="form-control" onSubmit={addUser}>
//                 <div className="mb-2 form-group">
//                     <label htmlFor="userEmail" className="mx-2">Email ID</label>
//                     <input type="email" name="userEmail" placeholder="Mail ID" required />
//                 </div>
//                 <div className="mb-2 form-group">
//                     <label htmlFor="password" className="mx-2">Password</label>
//                     <input type="password" name="password" placeholder="Password" required />
//                 </div>
//                 <div className="mb-2 form-group">
//                     <label htmlFor="confirmPassword" className="mx-2">Confirm Password</label>
//                     <input type="password" name="confirmPassword" placeholder="Confirm Password" required />
//                 </div>
//                 <div className="mb-2 form-group">
//                     <label htmlFor="firstName" className="mx-2">First Name</label>
//                     <input type="text" name="firstName" placeholder="First Name" required />
//                 </div>
//                 <div className="mb-2 form-group">
//                     <label htmlFor="lastName" className="mx-2">Last Name</label>
//                     <input type="text" name="lastName" placeholder="Last Name" required />
//                 </div>
//                 <div className="mb-2 form-group">
//                     <label htmlFor="profileLink" className="mx-2">Upload your Profic Pic here</label>
//                     <input type="text" name="profileLink" />
//                 </div>
//                 <button type="submit" className="btn btn-primary mb-2">Submit</button>
//                 <div>
//                     <p>Already existing User? <Link to="/Loginpage">Login</Link></p>
//                 </div>
//             </form>
//         </div>)
// }

export default Registerpage