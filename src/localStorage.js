const localStorateKey = 'mattapp';

export const loadState = () => {
  try {
    const serializedState = localStorage.getItem(localStorateKey);
    if(serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch(err) {
    console.log(err);
    return undefined;
  }
}

export const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem(localStorateKey, serializedState);
  } catch(err) {
    console.log(err);
    return undefined;
  }
}
