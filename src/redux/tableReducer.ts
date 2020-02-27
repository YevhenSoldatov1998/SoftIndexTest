import {UserType} from "../types/types";
import {Dispatch} from "redux";
import {AppState} from "./store";
import {getUsers} from "../API/usersAPI";
import _ from 'lodash'

// CONSTANTS
const GET_USERS = 'GET_USERS';
const SORT_BY = 'SORT_BY';
const DESC_OR_ASC = 'DESC_OR_ASC';

// ACTION TYPES
type GetUserSuccessActionType = {
    type: typeof GET_USERS
    users: Array<UserType>
}
type SortByActionType = {
    type: typeof SORT_BY
    field: string
}
type DescOrAsc = {
    type: typeof DESC_OR_ASC
}
type AllActionTypes = GetUserSuccessActionType
    | SortByActionType
    | DescOrAsc

// ACTION CREATOR
const getUserSuccess = (users: Array<UserType>): GetUserSuccessActionType => ({type: GET_USERS, users});
export const descOrAsc = ():DescOrAsc => ({type: DESC_OR_ASC})
export const sortBy = (field: string): SortByActionType => {
    debugger
    return {type: SORT_BY, field}
};

// THUNK CREATOR
export const getUsersThunk = () => async (dispatch: Dispatch<AllActionTypes>, getState: (state: AppState) => void) => {
    try {
        let data: Array<UserType> = await getUsers();
        dispatch(getUserSuccess(data));
    } catch (e) {
        alert('Cannot connect to server.\nTry running json-server\n')
    }
};

// TYPE STATE
type InitialStateType = {
    users: Array<UserType>
    order: boolean | "asc" | "desc"
}
// INITIAL STATE
const initialState: InitialStateType = {
    users: [],
    order: 'asc'
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
                order: state.order === 'asc'? 'desc': 'asc'
            }
        default:
            return state
    }
}
