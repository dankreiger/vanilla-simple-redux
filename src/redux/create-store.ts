type TListener = () => void;
type Action = { type: string };

export const createStore = <S extends unknown, A extends Action>(
  reducer: (state: S, action: A) => S
) => {
  let state: S;
  let listeners: TListener[] = [];

  const getState = () => state;

  const dispatch = (action: A) => {
    state = reducer(state, action);
    listeners.forEach((listener) => listener());
  };

  const subscribe = (listener: TListener) => {
    listeners.push(listener);
    return () => {
      listeners = listeners.filter((l) => l !== listener);
    };
  };

  dispatch({ type: '@@INIT' } as A);

  return {
    getState,
    dispatch,
    subscribe,
  };
};
