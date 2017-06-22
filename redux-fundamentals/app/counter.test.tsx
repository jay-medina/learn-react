jest.mock('redux');

describe('counter', function() {
  let subscribe: any;
  let getState: any;
  let createStore: any;

  describe('when running the app', function () {
    beforeEach(() => {
      jest.resetModules();
      createStore = require('redux').createStore;

      document.body.innerHTML = `
        <div id="container"></div>
      `;
      subscribe = jest.fn();
      getState = jest.fn();
      (createStore as jest.Mock<any>).mockReturnValue({
        subscribe,
        getState,
      });
      require('./counter');
    });

    it('creates a store', function() {
      expect(createStore).toHaveBeenCalledWith(expect.any(Function));
    });

    it('subscribes to the render function', function() {
      expect(subscribe).toHaveBeenCalled();
    });

    it('gets the current state', function () {
      expect(getState).toHaveBeenCalled();
    });

  });

});
