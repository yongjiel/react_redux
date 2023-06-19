// be careful, not hit the same type name of actions.js.
// because now the products and count sharing the same
// root reducers store.

export const INCREMENT = "INCREMENT";
export const DECREMENT = "DECREMENT";
export const RESET = "RESET";


export function increment() {
  return { type: INCREMENT };
}

export const decrement = () => ({ type: DECREMENT });

export const reset = () => ({ type: RESET });