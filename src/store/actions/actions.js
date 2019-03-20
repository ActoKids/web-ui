import fetch from 'cross-fetch'

export const REQUEST_EVENT = 'REQUEST_EVENT'
export const RECEIVE_POST = 'RECEIVE_POST'
export const SELECT_POST = 'SELECT_POST'

export function requestEvent(event) {
    return {
        type: REQUEST_EVENT,
        event
    }
}

export function receiveEvent(event) {
    return {
        type: RECEIVE_EVENT,
        event,
        events: json.data.children.map(child => child.data),
        receivedAt: Date.now()
    }
}

export function selectEvent(event) {
    return {
        type: SELECT_EVENT,
        event
    }
}

function fetchEvents(event) {
    return dispatch => {
        dispatch(requestEvent(event))
        return fetch('https://my.api.mockaroo.com/events.json?key=ab42ca00')
        .then(response => response.json())
        .then(json => dispatch(receiveEvent(event, json)))
    }
}





