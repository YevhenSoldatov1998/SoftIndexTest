import React from 'react';
import './App.css';
import {AppState} from "./redux/store";
import Form from "./component/Form/Form";
import Table from './component/Table/Table';


    const App = (props: AppState) => {
        return (
            <div className="App">
                <Form />
                <Table />
            </div>
        );
}

export default App;
