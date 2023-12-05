import { createStore } from './redux/create-store';
type Action = { type: 'INCREMENT' } | { type: 'DECREMENT' };

// Reducer function
export const reducer = (state = 0, action: Action) => {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    default:
      return state;
  }
};

// Create store
const store = createStore(reducer);

// For debugging
(window as any).store = store;
