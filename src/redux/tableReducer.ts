import {UserType} from "../types/types";
import {Dispatch} from "redux";
import {AppState} from "./store";
import {getUsers} from "../API/usersAPI";

// CONSTANTS
const GET_USERS = 'GET_USERS'
const SORT_BY = 'SORT_BY'

// ACTION TYPES
type GetUserSuccessActionType = {
    type: typeof GET_USERS
    users: Array<UserType>
}
type SortByActionType = {
    type: typeof SORT_BY
    field: string
}
type AllActionTypes = GetUserSuccessActionType
    | SortByActionType

// ACTION CREATOR
const getUserSuccess = (users: Array<UserType>): GetUserSuccessActionType => ({type: GET_USERS, users});
export const sortBy = (field: string): SortByActionType => ({type: SORT_BY, field})

// THUNK CREATOR
export const getUsersThunk = () => (dispatch: Dispatch<any>, getState: (state: AppState) => void) => {
    getUsers().then((data: Array<UserType>) => {
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
