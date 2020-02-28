import React from 'react'
import {reduxForm, InjectedFormProps, Field} from "redux-form";
import {minLength2, phoneNumber, required} from '../../util/validation';
import './Form.sass'
import {Button} from '../StyledComponent/Button';

interface PropsRenderField {
    input: any,
    type: any
    meta: any,
    placeholder: string
};

const renderField: React.FC<PropsRenderField> = (
    {
        meta: {touched, error, warning},
        input,
        ...props

    }) => {
    const hasError = error && touched
    return (
        <div>
            <div className="formControl">
                <input className={hasError ? 'error' : ''}  {...input} {...props}/>
                {touched &&
                ((error && <span className="textError">{error}</span>))}
            </div>
        </div>
    )
}

interface Props {
}

const Form: React.FC<Props & InjectedFormProps<{}, Props>> = (props: any) => {
    const {handleSubmit} = props;

    return <div>
        <form onSubmit={handleSubmit}>
            <Field
                name="firstName"
                type="input"
                component={renderField}
                placeholder="First Name"
                validate={[required, minLength2]}
            />
            <Field
                name="lastName"
                type="input"
                placeholder="Last Name"
                component={renderField}
                validate={[required, minLength2]}
            />
            <Field
                name="phone"
                type="string"
                component={renderField}
                validate={[required, phoneNumber]}
                placeholder="Phone"
            />

            <div className="radioField">
                <label><Field name="gender" component={"input"} type="radio"/> Male</label>
                <label><Field name="gender" component={"input"} type="radio" value={"Female"}/> Female</label>
            </div>
            <Field
                name="age"
                type="number"
                component={renderField}
                validate={[required]}
                placeholder="Age"
            />
            <Button>Add user</Button>


        </form>
    </div>
}

const FormRedux = reduxForm<{}, Props>({
    destroyOnUnmount: false,
    forceUnregisterOnUnmount: false,
    form: 'formData',
})(Form);

export default FormRedux