import React from 'react'
import {UserType} from "../../types/types";
import {InjectedFormProps, Field} from "redux-form";
import  {reduxForm} from "redux-form";

interface Props { };
const Form :  React.FC<Props & InjectedFormProps<{}, Props> >= (props: any) => {
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

const FormRedux = reduxForm<{}, Props>({
    destroyOnUnmount: false,
    forceUnregisterOnUnmount: false,
    form: 'user',
})(Form);

export default FormRedux