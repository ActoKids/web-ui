import { combineReducers } from 'redux'
import {
    SELECT_EVENT, REQUEST_EVENT, RECEIVE_EVENT
} from '../actions/actions'

function selectedEvent(state = 'reactjs', action) {
    switch (action.type) {
        case SELECT_EVENT:
            return action.event
        default:
            return state
    }
}

function events(
    state = {
        isFetching: false,
        error: null,
        events: []
    },
    action
) {
    switch (action.type) {
        case REQUEST_EVENT:
            return Object.assign({}, state, {
                isFetching: true,
            })
        case RECEIVE_EVENT:
            return Object.assign({}, state, {
                isFetching: false,
                events: action.events
            })
        default:
            return state
            
    }
}