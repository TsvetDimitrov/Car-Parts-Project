import * as api from './api.js';

const host = 'http://localhost:3030';
api.settings.host = 'http://localhost:3030';

export const login = api.login;
export const register = api.register;
export const logout = api.logout;

//App specific requests


//Facebook login: 
export async function facebookLogin() {
    const result = await api.get(host + '/auth/facebook');
    return result;
}

export async function isUserAdmin(){
    const result = await api.get(host + '/create');
    return result;
}