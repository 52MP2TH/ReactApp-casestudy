import React, { useState } from "react";
import TodolistDisplay from "./TodolistDisplay"

function UsercardDisplay(props) {
    const index = props.index
    const user = props.userData
    const [showtodoaddinput, setShowTodoAddInput] = useState(false)

    function showinputtodo() {
        setShowTodoAddInput(true)
    }

    function addTodotoUser(e) {
        e.preventDefault();
        const data = e.target.elements.newTodo.value
        const todo = { index, data }
        props.addTodoUser(todo)
        setShowTodoAddInput(false)

    }

    return (
        <div className="justify-content-center" >
            {/* {console.log(index, "this is index of usercard")} */}
            <div className="card mb-3 ">
                <img src={user.profileLink} alt={user.firstName} />
                <div className="card-body">
                    <h3><b>{user.firstName} {user.lastName}</b></h3>
                    <p>{user.userEmail}</p>
                    <p>{user.description}</p>
                    {user.todo_list.length === 0 ? <p>todo-list is empty</p> : <div>
                        <p><b>Your todo-list: </b></p>
                        <div className="todo-box mb-2">
                            {user.todo_list.map((todo, index) => <TodolistDisplay key={index} todo={todo} index={index} />)}
                        </div>
                    </div>
                    }

                    {showtodoaddinput ? <div><form onSubmit={addTodotoUser}><div className="cardaddtodo input-group mb-3"><input type="text" placeholder="Add todo" name="newTodo" className="p-1 mr-1" /><button type="submit" className="btn btn-success">Add</button></div></form></div> : <div></div>
                    }

                    <button className="btn btn-primary" onClick={showinputtodo}>Add todo-list</button>
                </div>
            </div>
        </div >
    )
}

export default UsercardDisplay