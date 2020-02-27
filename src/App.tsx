import React, {useEffect, FC} from 'react';
import './App.css';
import {AppState} from "./redux/store";
import Table from './component/Table/Table';
import {connect} from "react-redux";
import {UserType} from "./types/types";
import {deleteUserThunk, descOrAsc, getUsersThunk, setUserThunk, sortBy} from "./redux/tableReducer";
import FormRedux from "./component/Form/Form";
import Preloader from "./component/Preloader/Preloader";

type PropsType = {
    users: Array<UserType>
    order: boolean | "asc" | "desc"
    isFetching: boolean
    sortBy: (field: string) => void
    descOrAsc: () => void
    getUsersThunk: () => void
    setUserThunk: (user: UserType) => void
    deleteUserThunk: (userId: number) => void
}

const App: FC<PropsType> = (
    {users, isFetching, getUsersThunk, sortBy, descOrAsc, order, setUserThunk, deleteUserThunk}
) => {
    const handleSubmit = (value: any) => {
        setUserThunk(value)
    };
    useEffect(() => {
        getUsersThunk()
    }, [])
    return (
        <div className="App">
            <FormRedux onSubmit={handleSubmit}/>
            <Table sortBy={sortBy}
                   descOrAsc={descOrAsc}
                   users={users}
                   order={order}
                   deleteUserThunk={deleteUserThunk}
                   isFetching = {isFetching}
            />

        </div>
    );
};

type MapStateToPropsType = {
    users: Array<UserType>
    order: boolean | "asc" | "desc"
    isFetching: boolean
}
let mapStateToProps = (state: AppState): MapStateToPropsType => {
    return {
        users: state.table.users,
        order: state.table.order,
        isFetching: state.table.isFetching
    }
}
export default connect(mapStateToProps, {
    getUsersThunk, setUserThunk, sortBy, descOrAsc, deleteUserThunk
})(App);

