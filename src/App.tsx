import React, {useEffect, useState, FC} from 'react';
import './App.css';
import {AppState} from "./redux/store";
import Table from './component/Table/Table';
import {connect} from "react-redux";
import {UsersType, UserType} from "./types/types";
import  {reduxForm} from "redux-form";
import Form from './component/Form/Form'
import {getUsersThunk, sortBy} from "./redux/tableReducer";
import FormRedux from "./component/Form/Form";

type PropsType = {
    table: UsersType
    getUsersThunk: () => void
}
const App: FC<PropsType> = ({table,getUsersThunk}) => {
    const handleSubmit = (value: any) => {
        debugger
    };
    useEffect(()=> {
        getUsersThunk()
    },[])
    return (
        <div className="App">
            <FormRedux onSubmit={handleSubmit} />
            <Table users={table.users}/>

        </div>
    );
};

type MapStateToPropsType = {
    table: UsersType
}
let mapStateToProps = (state: AppState): MapStateToPropsType => {
    return {
        table: state.table
    }
};


export default connect(mapStateToProps, {getUsersThunk, sortBy})(App);
