import {UserType} from "../types/types";
import {Dispatch} from "redux";
import {AppState} from "./store";
import {deleteUser, getUsers, setUser} from "../API/usersAPI";
import _ from 'lodash'
import {reset} from "redux-form";

// CONSTANTS
const GET_USERS = 'GET_USERS';
const SORT_BY = 'SORT_BY';
const DESC_OR_ASC = 'DESC_OR_ASC';
const IS_FETCHING = 'IS_FETCHING';

// ACTION TYPES
type GetUsersSuccessActionType = {
    type: typeof GET_USERS
    users: Array<UserType>
}
type SortByActionType = {
    type: typeof SORT_BY
    field: string
}
type DescOrAscActionType = {
    type: typeof DESC_OR_ASC
}
type IsFetchingActionType = {
    type: typeof IS_FETCHING
    isFetching: boolean
}

type AllActionTypes = GetUsersSuccessActionType
    | SortByActionType
    | DescOrAscActionType
    | IsFetchingActionType

// ACTION CREATOR
const getUserSuccess = (users: Array<UserType>): GetUsersSuccessActionType => ({type: GET_USERS, users});
export const descOrAsc = (): DescOrAscActionType => ({type: DESC_OR_ASC});
export const sortBy = (field: string): SortByActionType => ({type: SORT_BY, field});
export const toggleIsFetching = (isFetching: boolean) => ({type: IS_FETCHING, isFetching});

// THUNK CREATOR
export const getUsersThunk = () => async (dispatch: Dispatch<any>, getState: (state: AppState) => void) => {
    try {
        dispatch(toggleIsFetching(true));
        let data: Array<UserType> = await getUsers();
        dispatch(getUserSuccess(data));
        dispatch(toggleIsFetching(false));
    } catch (e) {
        alert('Cannot connect to server.\nTry running json-server.\nTake the following steps:\n' +
            '1) Install JSON Server' +
            '\n' +
            'npm install -g json-server\n' +
            '2) Start JSON Server in your terminal ' +
            '\n' +
            'json-server --watch src/server/db.json')
    }
};
export const setUserThunk = (user: UserType) => async (dispatch: Dispatch<AllActionTypes & any>, getState: (state: AppState) => void) => {
    try {
        let data = await setUser(user);
        dispatch(getUsersThunk())
        dispatch(reset('formData'));
    } catch (e) {
        alert('some error: ' + e)
    }
}
export const deleteUserThunk = (userId: number) => async (dispatch: Dispatch<AllActionTypes & any>, getState: (state: AppState) => void) => {
    try {
        let promise = await deleteUser(userId);
        dispatch(getUsersThunk())
    } catch (e) {
        alert('sorry some error \n' + e)
    }
}

// TYPE STATE
type InitialStateType = {
    users: Array<UserType>
    order: boolean | "asc" | "desc"
    isFetching: boolean
    mainFields: Array<{id: string, title: string}>
}

// INITIAL STATE
const initialState: InitialStateType = {
    users: [],
    order: 'asc',
    isFetching: false,
    mainFields:[
        {id: 'firstName', title: 'First Name'},
        {id: 'lastName', title: 'Last Name'},
        {id: 'phone', title: 'Phone'},
        {id: 'gender', title: 'Gender'},
        {id: 'age', title: 'Age'},
    ]
};

//REDUCER
export const tableReducer = (state = initialState, action: AllActionTypes): InitialStateType => {
    switch (action.type) {
        case GET_USERS:
            return {
                ...state,
                users: [...action.users]
            };
        case SORT_BY:
            let {field} = action
            let chars = state.users;
            let orders = state.order;
            chars = _.orderBy(chars, [field], [orders]);
            return {
                ...state,
                users: chars
            }
        case DESC_OR_ASC:
            return {
                ...state,
                order: state.order === 'asc' ? 'desc' : 'asc'
            }
        case IS_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching
            }
        default:
            return state
    }
}
