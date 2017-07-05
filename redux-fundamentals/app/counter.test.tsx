jest.mock('redux');

import { createStore } from 'redux';
import { start } from './counter';

describe('counter', function () {
  let subscribe: any;
  let getState: any;

  describe('when running the app', function () {
    beforeEach(() => {
      document.body.innerHTML = `
        <div id="mainCounter">
          <div id="counter-container"></div>
        </div>
      `;
      subscribe = jest.fn();
      getState = jest.fn(() => []);
      (createStore as jest.Mock<any>).mockReturnValue({
        subscribe,
        getState,
      });
      start();
    });

    it('creates a store', function () {
      expect(createStore).toHaveBeenCalledWith(expect.any(Function));
    });

    it('subscribes to the render function', function () {
      expect(subscribe).toHaveBeenCalled();
    });

    it('gets the current state', function () {
      expect(getState).toHaveBeenCalled();
    });

  });

});
