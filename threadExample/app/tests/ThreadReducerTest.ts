import ThreadReducer, {ThreadAction, ActionTypes} from '../reducers/ThreadReducer.ts';

export function execute() {
  var timestamp = 1468613933179;
  Date.now = function () {
    return timestamp++;
  }

  function expect(before: any, after: any, msg?: string) {
    return console.assert(JSON.stringify(before) === JSON.stringify(after), `${JSON.stringify(before)} === ${JSON.stringify(after)}`, msg);
  }

  expect(ThreadReducer(undefined, {} as ThreadAction), [], 'init');
  expect(ThreadReducer([], { type: ActionTypes.ADD_POST, person: 'jose', text: 'first post', id: 0 }),
    [{ id: 0, person: 'jose', text: 'first post', timestamp: 1468613933179 }], 'initial post');

  expect(ThreadReducer(
    [{ person: 'jose', text: 'first post', timestamp: 1468613933179, id: 0 }],
    { type: ActionTypes.ADD_POST, person: 'pj', text: 'second post', id: 1 }
  ),
    [{ person: 'jose', text: 'first post', timestamp: 1468613933179, id: 0 },
      { id: 1, person: 'pj', text: 'second post', timestamp: 1468613933180 }], 'second post on the thread');

  expect(ThreadReducer(
    [{ person: 'jose', text: 'first post', timestamp: 1468613933179, id: 0 }],
    { type: ActionTypes.ADD_POST, person: 'pj', text: 'second post', replyTo: 'jose', id: 1 }
  ),
    [{ person: 'jose', text: 'first post', timestamp: 1468613933179, id: 0 },
      { id: 1, person: 'pj', text: 'second post', timestamp: 1468613933181, replyTo: 'jose' }], 'replying to a person');

  expect(ThreadReducer(
    [{ person: 'jose', text: 'first post', timestamp: 1468613933179, id: 0 },
      { id: 1, person: 'pj', text: 'second post', timestamp: 1468613933181, replyTo: 'jose' }],
    { type: ActionTypes.DELETE_POST, id: 1 }
  ),
    [{ person: 'jose', text: 'first post', timestamp: 1468613933179, id: 0 }], 'deleting a post');

  expect(ThreadReducer(
    [{ person: 'jose', text: 'first post', timestamp: 1468613933179, id: 0 }],
    { type: ActionTypes.DELETE_POST, id: 100 }
  ),
    [{ person: 'jose', text: 'first post', timestamp: 1468613933179, id: 0 }], 'deleting an id that doesn\'t exist');

}
