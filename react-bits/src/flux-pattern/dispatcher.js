var Dispatcher = function () {
  return {
    _stores: [],
    register: function (store) {
      if (!store || !store.update ) {
        throw new Error('You should provide a store that has an update method');
      } else {
        var consumers = [];
        var change = () => consumers.forEach(l => l(store));
        var subscribe = function (consumer, noInit) {
          consumers.push(consumer);
          !noInit ? consumer(store) : null;
        }

        this._stores.push({ store, change });
        return subscribe;
      }
    }, 
    dispatch: function(action) {
      if (this._stores.length > 0) {
        this._stores.forEach(function(entry) {
          entry.store.update(action, entry.change);
        })
      }
    } 
  }
}

module.exports = {
  create: function () {
    var dispatcher = Dispatcher();

    return {
      createAction: function(type) {
        if (!type) {
          throw new Error("Please provide action type");
        } else {
          return function (payload) {
            return dispatcher.dispatch({ type, payload })
          }
        }
      }, 
      createSubscriber: function(store) {
        return dispatcher.register(store);
      }
    }
  }
}