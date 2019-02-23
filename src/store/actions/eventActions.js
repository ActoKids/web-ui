export const createEvent = (event) => {
    // dispatches an action to the reducer
    // using thunk to return a function
    return (dispatch, getState) => {
        // pauses the dispatch then makes async call
        dispatch({ type: 'CREATE_EVENT', event });
    }
}