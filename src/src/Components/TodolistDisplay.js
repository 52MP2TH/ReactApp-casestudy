import React from "react";

function TodolistDisplay(props) {

    return (
        <div>
            <input type="checkbox" className="strikethrough mx-2" />
            <span>{props.todo}</span>
        </div>
    )
}

export default TodolistDisplay