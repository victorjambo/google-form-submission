/* eslint-disable array-callback-return */
import { JSONToString } from './stringify';

const l = {
  init: (store, defaults) => {
    Object.keys(store).map(key => {
      const existingVal = l.get(store[key]);
      if (existingVal == null) {
        l.set(store[key], defaults[key]);
      }
    });
    return true; // TODO return store
  },

  set: (key, value) => {
    console.log('SET');
    const data = JSONToString(value);
    localStorage.setItem(key, data);
  },

  get: key => {
    console.log('GET');
    const data = localStorage.getItem(key);
    return data;
  },

  remove: key => {
    localStorage.removeItem(key);
  },

  reset: () => {
    localStorage.clear();
  }
};

const c = {
  init: (store, defaults) => {
    Object.keys(store).map(key => {
      const existingVal = c.get(store[key]);
      if (existingVal == null) {
        c.set(store[key], defaults[key]);
      }
    });
  },

  set: (key, value) => {
    console.log('SET');
    const data = JSONToString(value);
    chrome.storage.local.set({ [key]: data });
  },

  get: key => {
    console.log('GET');
    let data = null;
    chrome.storage.local.get([key], res => {
      data = res;
    });
    return data;
  },
  remove: () => {},
  reset: () => {},
};

const isEnvironmentDev = !process.env.NODE_ENV || process.env.NODE_ENV === 'development';

const ExtStore = isEnvironmentDev ? l : c;

export default ExtStore;
