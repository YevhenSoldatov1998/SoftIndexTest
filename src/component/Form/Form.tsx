import React from 'react'
import  {reduxForm, InjectedFormProps, Field} from "redux-form";

interface Props { };

const Form :  React.FC<Props & InjectedFormProps<{}, Props> >= (props: any) => {
    const { handleSubmit } = props;

    return <div>
        <form onSubmit={handleSubmit}>
            <Field
                name="firstName"
                type="input"
                component={"input"}
                placeholder="First Name"
            />
            <Field
                name="lastName"
                type="input"
                component={"input"}
                placeholder="Last Name"
            />
            <Field
                name="phone"
                type="string"
                component={"input"}
                placeholder="Phone"
            />

            <Field
                name="gender"
                type="checkbox"
                component={"input"}
                placeholder="Gander"
            />
            <Field
                name="age"
                type="number"
                component={"input"}
                placeholder="Age"
            />
            <button>Add user</button>


        </form>
    </div>
}

const FormRedux = reduxForm<{}, Props>({
    destroyOnUnmount: false,
    forceUnregisterOnUnmount: false,
    form: 'formData',
})(Form);

export default FormRedux