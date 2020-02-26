import {UserType} from "../types/types";
import {Dispatch} from "redux";
import {AppState} from "./store";
import {getUsers} from "../API/usersAPI";

// CONSTANTS
const GET_USERS = 'GET_USERS'

// ACTION TYPES
type getUserSuccessActionType = {
    type: typeof GET_USERS
    users: Array<UserType>
}
type AllActionTypes = getUserSuccessActionType

// ACTION CREATOR
const getUserSuccess = (users: Array<UserType>): getUserSuccessActionType => ({type: GET_USERS, users});

// THUNK CREATOR
export const getUsersThunk = () => (dispatch: Dispatch<any>, getState: (state: AppState) => void) => {
    getUsers().then(data => {
        dispatch(getUserSuccess(data))
    })
}

// TYPE STATE
type InitialStateType = {
    users: Array<UserType>
}
// INITIAL STATE
const initialState: InitialStateType = {
    users: []
};

//REDUCER
export const tableReducer = (state = initialState, action: AllActionTypes): InitialStateType => {
    switch (action.type) {
        case GET_USERS:
            return {
                ...state,
                users: [...action.users]

            }
        default:
            return state
    }
}
