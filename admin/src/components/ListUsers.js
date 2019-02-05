import React from 'react'
import {reduxForm, Field} from 'redux-form'

const ListUsers = ({handleSubmit, reset}) => {
  const onSubmit = values => {
    handleSubmit(values);
    reset();
  };

  return (
    <div>
      <h1>Список пользователей</h1>
      <form onSubmit={onSubmit}>
        <div>
          <div>
            name:
          </div>
          <div>
            <Field component="input" name="name" />
          </div>
        </div>
        <div>
          <div>
            email:
          </div>
          <div>
            <Field component="input" name="email"/>
          </div>
        </div>
        <button type="submit">Добавить</button>
      </form>
    </div>
  );
};

export default reduxForm({
  form: 'list-users'
})(ListUsers);
