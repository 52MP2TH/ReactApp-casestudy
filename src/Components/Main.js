import React, { Component } from "react";
import { Route, Switch } from "react-router";
import Loginpage from './Loginpage'
import Registerpage from './Registerpage';
import Welcomepage from "./Welcomepage";
import AllUsers from "./AllUsers";
import Editprofile from "./Editprofile";
import PageNotFound from "./PageNotFound";

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
                    profileLink: "https://cdn.wallpapersafari.com/68/28/MfAdts.jpg",
                    description: "I love coding....",
                    todo_list: ["Read my book first", "Learn programming"]
                },
                {
                    id: 1,
                    userEmail: "lokeshh@gmail.com",
                    password: "Lokesh@123",
                    firstName: "Lok",
                    lastName: "H",
                    profileLink: "https://images.all-free-download.com/images/graphicthumb/mallorca_tree_nature_216451.jpg",
                    description: "I am very good cricket player...",
                    todo_list: []
                },
                {
                    id: 2,
                    userEmail: "hello@gmail.com",
                    password: "Hello@123",
                    firstName: "Hel",
                    lastName: "Boy",
                    profileLink: "https://freepngimg.com/thumb/hellboy/21728-6-hellboy-picture.png",
                    description: "I'm Hellboy stongest of the stongest",
                    todo_list: []
                }
            ]
        }
        this.addUser = this.addUser.bind(this)
        this.addTodoUser = this.addTodoUser.bind(this)
        this.deleteUser = this.deleteUser.bind(this)
    }

    addUser(newUser) {
        this.setState({ usersList: this.state.usersList.concat([newUser]) })
    }

    addTodoUser(todo) {
        const id = todo.id;
        const todoData = todo.data;
        console.log(todo, "inside main")
        let newtodosetuser = this.state.usersList.filter(user => user.id === id)
        console.log(newtodosetuser, "new todo to add")
        newtodosetuser[0].todo_list.concat([...newtodosetuser[0].todo_list, todoData])
        console.log(newtodosetuser, "new todo to added after")
        this.deleteUser(id);
        this.addUser(newtodosetuser)
    }

    deleteUser(userId) {
        this.setState((state) => ({
            usersList: state.usersList.filter(user => user.id !== Number(userId))
        }))
    }

    render() {
        return (
            <Switch>
                <Route path="/" exact render={({ history }) => (
                    <div>
                        <Loginpage usersList={this.state.usersList} history={history} />
                        {console.log(this.state.usersList)}
                    </div>
                )} />
                <Route path="/Loginpage" render={({ history }) => (
                    <Loginpage usersList={this.state.usersList} history={history} />
                )} />
                <Route path="/Registerpage" exact render={({ history }) => (
                    <Registerpage history={history} onAddUser={(newUser) => {
                        this.addUser(newUser)
                        history.push("/")
                    }} />
                )} />
                <Route path="/Welcomepage" render={({ history, location }) => (
                    <Welcomepage usersList={this.state.usersList} history={history} location={location} />
                )} />
                <Route path="/AllUsers" render={({ history, location }) => (
                    <AllUsers usersList={this.state.usersList} addTodoUser={this.addTodoUser} history={history} location={location} />
                )} />
                <Route path="/Editprofile" render={({ history }) => (
                    <Editprofile usersList={this.state.usersList} history={history} onAddUser={(newUser => this.addUser(newUser))} onDeleteUserForUpdate={(userId) => this.deleteUser(userId)} onDeleteUser={(userId) => {
                        this.deleteUser(userId)
                        history.push("/")
                    }} />
                )} />
                <Route path="*" component={PageNotFound} />
            </Switch>
        )
    }
}

export default Main