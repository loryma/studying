var Store = {
  _handlers: [],
  _flag: '',
  onChange: function (handler) {
    this._handlers.push(handler);
  },
  set: function (value) {
    this._flag = value;
    this._handlers.forEach(handler => handler())
  },
  get: function () {
    return this._flag;
  }
};
export default Store;