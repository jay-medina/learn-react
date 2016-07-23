import {Action} from 'redux';
import ThreadReducer, {ThreadAction, ActionTypes as TActionTypes} from './ThreadReducer.ts';
var THREAD_ID = 0;
var POST_ID = 0;


export const ActionTypes = {
  CREATE_THREAD: 'CREATE_THREAD'
};


export interface MultiThreadAction extends Action {
  text?: string,
  person?: string
  thread_id?: number,
  post_id?: number
}

function createThread(state, action) {
  var id = THREAD_ID++;
  var post_id = POST_ID++;

  var newThread = {};
  newThread[id] = ThreadReducer([], {
    text: action.text,
    person: action.person,
    id: post_id,
    type: TActionTypes.ADD_POST
  });

  return Object.assign({}, state, newThread);
}


function addPost(state, action) {
  var {thread_id, text, person} = action;
  var threadPosts = state[thread_id];

  if (threadPosts) {
    var post_id = POST_ID++;
    var newThread = {};
    newThread[thread_id] = ThreadReducer(threadPosts, {
      text,
      person,
      id: post_id,
      type: TActionTypes.ADD_POST
    });

    return Object.assign({}, state, newThread);
  }
  return state;
}

function deleteThread(state, thread_id) {
  var id = String(thread_id);

  return Object.keys(state)
          .filter(key => key !== id)
          .reduce((res, key) => (res[key] = state[key], res), {});
}

function deletePost(state, action) {
  var {thread_id, post_id} = action;
  var threadPosts = state[thread_id];

  if (threadPosts) {
    var newThread = {};
    newThread[thread_id] = ThreadReducer(threadPosts, {
      id: post_id,
      type: TActionTypes.DELETE_POST
    });

    if(newThread[thread_id].length > 0) {
      return Object.assign({}, state, newThread);
    }

    return deleteThread(state, thread_id);
  }

  return state;
}

function MultiThreadReducer(state = {}, action: MultiThreadAction) {

  switch (action.type) {
    case ActionTypes.CREATE_THREAD: return createThread(state, action);
    case TActionTypes.ADD_POST: return addPost(state, action);
    case TActionTypes.DELETE_POST: return deletePost(state, action);
  }


  return state;
}




export default MultiThreadReducer;