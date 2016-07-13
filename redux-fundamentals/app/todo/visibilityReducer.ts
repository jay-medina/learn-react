import {Action} from 'redux';


export const ActionTypes = {
  SET_VISIBILITY_FILTER: 'SET_VISIBILITY_FILTER'
};

export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED'
}

export interface VisibilityAction extends Action {
  filter: string;
}

export default function VisibilityReducer(state = VisibilityFilters.SHOW_ALL, action: VisibilityAction) {
  switch (action.type) {
    case ActionTypes.SET_VISIBILITY_FILTER: return action.filter;
    default: return state;
  }
}