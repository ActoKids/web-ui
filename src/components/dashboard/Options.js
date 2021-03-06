import React from 'react'

const Options = () => {
    return (
        <div className="options">
            <a href="/" className="option-btn btn-floating btn-small waves-effect waves-light red">
                <i className="large material-icons">delete</i>
            </a>
            <a href="/update" className="option-btn btn-floating btn-small waves-effect waves-light yellow">
                <i className="large material-icons">edit</i>
            </a>
        </div>
    )
}

export default Options