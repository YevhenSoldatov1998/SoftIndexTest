import React, {useEffect, useState, FC, Props} from 'react';
import './App.css';
import {AppState} from "./redux/store";
import Table from './component/Table/Table';
import {connect} from "react-redux";
import {UserType} from "./types/types";
import {descOrAsc, getUsersThunk, sortBy} from "./redux/tableReducer";
import FormRedux from "./component/Form/Form";

type PropsType = {
    users: Array<UserType>
    getUsersThunk: () => void
    sortBy: (field: string) => void
    descOrAsc: () => void
}

const App: FC<PropsType> = ({users, getUsersThunk, sortBy, descOrAsc}) => {
    debugger
    const handleSubmit = (value: any) => {
        debugger
    };
    useEffect(() => {
        getUsersThunk()
    }, [])
    return (
        <div className="App">
            <FormRedux onSubmit={handleSubmit}/>
            <Table sortBy={sortBy}
                   descOrAsc={descOrAsc}
                   users={users}/>
        </div>
    );
};

type MapStateToPropsType = {
    users: Array<UserType>
}
let mapStateToProps = (state: AppState): MapStateToPropsType => {
    return {
        users: state.table.users
    }
}
export default connect(mapStateToProps, {getUsersThunk, sortBy, descOrAsc})(App);

