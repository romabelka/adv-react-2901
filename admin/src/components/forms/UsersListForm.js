import React from 'react'
import { Field, reduxForm } from 'redux-form'
import ErrorField from '../common/error-field'

let UserListForm = props => {
    const {handleSubmit} = props
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Name</label>
                <div>
                    <Field name="name" component={ErrorField}/>
                </div>
            </div>
            <div>
                <label>other data</label>
                <div>
                    <Field name="other" component={ErrorField}/>
                </div>
            </div>
            <div>
                <button type="submit">Submit</button>
            </div>
        </form>
    )
}

export default reduxForm({
    form: 'user-list-form',
})(UserListForm)