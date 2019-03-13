import React from 'react'
import { API } from "aws-amplify"
import { connect } from 'react-redux'

const getDetails = (props) => {
    console.log(props);
    const id = props.match.params.id;
    return (
        <div className="container section event-details">
            <div className="card">
                <div className="card-content">
                    <span className="card-title">Title = {id}</span>
                </div>
            </div>
        </div>
    )
}

export default getDetails