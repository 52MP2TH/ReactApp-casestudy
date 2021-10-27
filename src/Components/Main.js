import React, { Component } from "react";
import { Route, Switch } from "react-router";
import Loginpage from './Loginpage'
import Registerpage from './Registerpage';
import Welcomepage from "./Welcomepage";
import AllUsers from "./AllUsers";
import Editprofile from "./Editprofile";
import ProductsDisplay from "./ProductsDisplay"

class Main extends Component {
    constructor() {
        super();
        this.state = {
            usersList: [
                {
                    id: 0,
                    userEmail: "sampath@gmail.com",
                    password: "Sampath@123",
                    firstName: "Sam",
                    lastName: "C",
                    profileLink: "https://cdn.wallpapersafari.com/68/28/MfAdts.jpg"
                },
                {
                    id: 1,
                    userEmail: "lokeshh@gmail.com",
                    password: "Lokesh@123",
                    firstName: "Lok",
                    lastName: "H",
                    profileLink: "https://images.all-free-download.com/images/graphicthumb/mallorca_tree_nature_216451.jpg"
                },
                {
                    id: 2,
                    userEmail: "hello@gmail.com",
                    password: "Hello@123",
                    firstName: "Hel",
                    lastName: "Boy",
                    profileLink: "https://freepngimg.com/thumb/hellboy/21728-6-hellboy-picture.png"
                }
            ]
        }
        this.addUser = this.addUser.bind(this)
    }

    addUser(newUser) {
        this.setState({ usersList: [...this.state.usersList, newUser] })
    }

    render() {
        return (
            <Switch>
                <Route path="/" exact render={({ history }) => (
                    <Loginpage usersList={this.state.usersList} history={history} />
                )} />
                <Route path="/Loginpage" exact render={({ history }) => (
                    <Loginpage usersList={this.state.usersList} history={history} />
                )} />
                <Route path="/Registerpage" exact render={({ history }) => (
                    <Registerpage onAddUser={(newUser) => {
                        this.addUser(newUser)
                        history.push("/")
                    }} />
                )} />
                <Route path="/Welcomepage" render={({ history, location }) => (
                    <Welcomepage usersList={this.state.usersList} history={history} location={location} />
                )} />
                <Route path="/AllUsers" exact render={({ history }) => (
                    <AllUsers usersList={this.state.usersList} history={history} />
                )} />
                <Route path="/Editprofile" render={({ history }) => (
                    <Editprofile usersList={this.state.usersList} history={history} />
                )} />
                <Route path="/ProductsDisplay" component={ProductsDisplay} />
            </Switch>
        )
    }
}

export default Main