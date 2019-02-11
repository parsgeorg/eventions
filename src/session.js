import { history } from './store';

const LS_AUTH_KEY = 'isUserAuth';

const isAuthorized = () => localStorage.getItem(LS_AUTH_KEY);

const login = () => {
  localStorage.setItem(LS_AUTH_KEY, 'yes');
  history.push('/products');
};

const logout = () => {
  localStorage.removeItem(LS_AUTH_KEY);
  history.push('/login');
};

export { isAuthorized, login, logout };
  