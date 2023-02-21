export function formatPrice(value) {
  return value.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
}

const localStorageKey = 'frontend_mentor_e-commerce';
export function initLocalStorage() {
  localStorage.setItem(localStorageKey, JSON.stringify({}));
}

export function getLocalStorage() {
  const data = JSON.parse(localStorage.getItem(localStorageKey));
  return data;
}

export function updateLocalStorage(property, value) {
  const data = getLocalStorage();
  data[property] = value;
  localStorage.setItem(localStorageKey, JSON.stringify(data));
}
