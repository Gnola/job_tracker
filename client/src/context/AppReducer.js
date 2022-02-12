export default (state, action) => {
  switch (action.type) {
    case 'ADD_JOB':
      return {
        ...state,
        jobs:[...state.jobs, action.payload]
      }
    case 'ADD_UPDATE':
      return {
        ...state,
        jobs:[...state.jobs, action.payload]
      }
    default:
      return state;
  }
}
