import {Action} from 'redux';
import ThreadReducer, {ThreadAction, ActionTypes as TActionTypes} from './ThreadReducer.ts';
var THREAD_ID = 0;
var POST_ID = 0;
export const ActionTypes = {
  CREATE_THREAD: 'CREATE_THREAD'
};

export interface MultiThreadAction extends Action {
  text: string,
  person: string
  thread_id?: number
}

function createThread(state, action: MultiThreadAction) {
  var id = THREAD_ID++;
  var post_id = POST_ID++;

  var threadAction: ThreadAction = {
    id: post_id,
    text: action.text,
    person: action.person,
    type: TActionTypes.ADD_POST
  };

  var newThread = {};
  newThread[id] = ThreadReducer([], threadAction);

  return Object.assign({}, state, newThread);
}

function addPost(state, action: MultiThreadAction) {
  
}

function MultiThreadReducer(state = {}, action: MultiThreadAction) {
  
  switch(action.type) {
    case ActionTypes.CREATE_THREAD: return createThread(state, action as MultiThreadAction);
    case TActionTypes.ADD_POST: return addPost(state, action as MultiThreadAction);
  }


  return state;
}




export default MultiThreadReducer;