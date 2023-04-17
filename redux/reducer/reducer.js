const initialState = {};
function rootReducer(state = initialState, action) {
  // always return a new object for the root state
  switch (action.type) {
    default:
      // If this reducer doesn't recognize the action type, or doesn't
      // care about this specific action, return the existing state unchanged
      return state;
  }
}

export default rootReducer;