const isDev = !process.env.NODE_ENV || process.env.NODE_ENV === 'development';

export const setLocalStorage = (key, value) => {
  try {
    if (isDev) {
      window.localStorage.setItem(key, JSON.stringify(value));
    } else {
      chrome.storage.local.set({ [key]: JSON.stringify(value) });
    }
  } catch (e) {
    console.log(e);
    // TODO
    // catch possible errors:
    // https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API
  }
};

export const getLocalStorage = (key, initialValue) => {
  try {
    if (isDev) {
      const value = window.localStorage.getItem(key);
      return value ? JSON.parse(value) : initialValue;
    }
    const value = chrome.storage.local.get([key]);
    return value ? JSON.parse(value) : initialValue;
  } catch (e) {
    // if error, return initial value
    return initialValue;
  }
};
