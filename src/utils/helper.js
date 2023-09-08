export const awaiter = (duration = 0) => new Promise((resolve) => {
  setTimeout(() => {
    resolve();
  }, duration);
});

export const saveToLocalStorage = (key = '', payload = {}) => {
  localStorage.setItem(key, JSON.stringify(payload));
};

export const getFromLocalStorage = (key = '') => {
  const item = localStorage.getItem(key);
  if (!item) return null;

  return JSON.parse(item);
};
