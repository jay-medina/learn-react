import {Action} from 'redux';

export interface ThreadPost {
  id: number,
  text: string,
  person: string,
  timestamp: number,
  replyTo?: string
}

export interface ThreadAction extends Action {
  id: number,
  person?: string,
  text?: string,
  replyTo?: string
}

export const ActionTypes = {
  ADD_POST: 'ADD_POST',
  DELETE_POST: 'DELETE_POST'
};

function addPost(state, action) {
  const {id, person, text} = action;

  let node: ThreadPost = {id, person, text, timestamp: Date.now()};

  if(action.replyTo) {
    node.replyTo = action.replyTo;
  }
  return [...state, node];
}

function deletePost(state, action) {
  return state.filter(post => {
    return post.id !== action.id;
  });
}

function ThreadReducer(state: ThreadPost[] = [], action:ThreadAction) {
  switch(action.type) {
    case ActionTypes.ADD_POST: return addPost(state, action);
    case ActionTypes.DELETE_POST: return deletePost(state, action);
  }
  return state;
}

export default ThreadReducer;