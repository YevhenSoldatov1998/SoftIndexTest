import React from 'react'
import {UserType} from "../../types/types";
import {InjectedFormProps, Field} from "redux-form";

const Form :  React.FC<UserType & InjectedFormProps<{}, UserType> >= (props: any) => {
    const { handleSubmit } = props;

    return <div>
        <form onSubmit={handleSubmit}>
            <Field
                name="userAddress"
                type="textarea"
                // component={"input"}
                label="Address *"
                placeHolder="Enter Address"
            />
        </form>
    </div>
}
export default Form