let _store;

export function registerStore(store) {
  _store = store;
}

export function getStore() {
  return _store;
}

export function getState() {
  return _store.getState();
}

export function dispatch(action) {
  return _store.dispatch(action);
}
