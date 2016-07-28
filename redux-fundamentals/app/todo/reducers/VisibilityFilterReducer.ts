import ActionTypes from './ActionTypes.ts';

function VisibilityFilterReducer(state = 'SHOW_ALL', action) {
  switch(action.type) {
    case ActionTypes.SET_VISIBILITY_FILTER: return action.filter;
  }

  return state;
}

export default VisibilityFilterReducer;