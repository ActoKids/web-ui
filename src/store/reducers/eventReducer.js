const initialState = {
  events: null
};

const eventReducer = (state = initialState, action) => {
  // checking the type of action preformed
  switch (action.type) {
    case "CREATE_EVENT":
      return state;
    case "EVENTS_FETCHED":
      return {
        events: action.payload
      };
    // delete events
    case "DELETE_EVENTS":
      const eventIds = action.payload;
      if (eventIds && eventIds.length > 0) {
        let events = state.events;

        // filter selected item ids
        eventIds.forEach(id => {
          events = events.filter(event => event.event_id !== id);
          return null;
        });

        return {
          ...state,
          events
        };
      }
      return state;
    default:
      return state;
  }
};

export default eventReducer;
