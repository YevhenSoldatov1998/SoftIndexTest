import {UserType} from "../types/types";

// CONSTANTS

// ACTION TYPES

// ACTION CREATOR

// TYPE STATE
type InitialStateType = {
    users: Array<UserType>
}
// INITIAL STATE
const initialState: InitialStateType = {
    users: [
        {id: 1, firstName: 'Yevhen', lastName: 'Soldatov',  phone: '380662132949', gender: true , age: 22}
    ]
};

//REDUCER
export const tableReducer = (state = initialState, action: any):InitialStateType => {
    return state
}
