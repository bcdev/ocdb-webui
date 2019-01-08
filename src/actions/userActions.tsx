import { Dispatch } from 'redux';
import * as api from '../api'
import { AppState } from '../states/appState';
import { User } from '../types/user';

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export function loginUser(name: string, password: string) {
    return (dispatch: Dispatch<LoginUser | StartUserLogin>, getState: () => AppState) => {
        dispatch(_startUserLogin());
        const apiServerUrl = getState().configState.apiServerUrl;
        const apiServerAuth = getState().configState.apiServerAuth;

        api.loginUser(apiServerUrl, apiServerAuth, name, password)
           .then((user: User) => {
               dispatch(_loginUser(user, null));
           })
           .catch(error => {
               dispatch(_loginUser(null, `${error}`));
           });
    };
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const START_USER_LOGIN = 'START_USER_LOGIN';
export type START_USER_LOGIN = typeof START_USER_LOGIN;

export interface StartUserLogin {
    type: START_USER_LOGIN;
}

function _startUserLogin(): StartUserLogin {
    return {type: START_USER_LOGIN};
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const LOGIN_USER = 'LOGIN_USER';
export type LOGIN_USER = typeof LOGIN_USER;

export interface LoginUser {
    type: LOGIN_USER;
    user: User | null;
    userLoginError: string | null;
}

function _loginUser(user: User | null, userLoginError: string | null): LoginUser {
    return {type: LOGIN_USER, user, userLoginError};
}


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export type UserAction = LoginUser | StartUserLogin;
