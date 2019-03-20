export const createEvent = event => {
  // dispatches an action to the reducer
  // using thunk to return a function
  return (dispatch, getState) => {
    // pauses the dispatch then makes async call
    dispatch({ type: "CREATE_EVENT", event });
  };
};

// Save events on store
export const saveEvents = events => {
  return {
    type: "EVENTS_FETCHED",
    payload: events
  };
};

// receives and array of eventIds to remove them
export const deleteEvents = (eventIds = []) => {
  return dispatch => {
    dispatch({ type: "DELETE_EVENTS", payload: eventIds });
  };
};
