import React from 'react';
import { FormProps } from '../models/form.model';

export const StudentForm: React.FC<FormProps> = ({ onChange, onSave, student }) => (
  <>
    <div className="columns">
      <div className="column is-half is-offset-one-quarter">
        <h2 className="title">Add New Student</h2>
        <div className="box">
          <form onSubmit={onSave}>
            <div className="field">
              <label className="label" htmlFor="firstName">
                First Name
              </label>
              <div className="control">
                <input className="input" type="text" name="firstName" onChange={onChange} value={student.firstName} />
              </div>
            </div>
            <div className="field">
              <label className="label" htmlFor="lastName">
                Last Name
              </label>
              <div className="control">
                <input className="input" type="text" name="lastName" onChange={onChange} value={student.lastName} />
              </div>
            </div>
            <div className="field">
              <label className="label" htmlFor="address">
                Address
              </label>
              <div className="control">
                <input className="input" type="text" name="address" onChange={onChange} value={student.address} />
              </div>
            </div>
            <div className="field">
              <label className="label" htmlFor="city">
                City
              </label>
              <div className="control">
                <input className="input" type="text" name="city" onChange={onChange} value={student.city} />
              </div>
            </div>
            <div className="field">
              <label className="label" htmlFor="phone">
                Phone
              </label>
              <div className="control">
                <input className="input" type="tel" name="phone" onChange={onChange} value={student.phone} />
              </div>
            </div>
            <div className="field">
              <label className="label" htmlFor="gpa">
                GPA
              </label>
              <div className="control">
                <input className="input" type="number" name="gpa" onChange={onChange} value={student.gpa} />
              </div>
            </div>
            <div className="field">
              <label className="label" htmlFor="photo">
                Photo URL
              </label>
              <div className="control">
                <input className="input" type="text" name="photo" onChange={onChange} value={student.photo} />
              </div>
            </div>
            <div className="field has-addons has-addons-right">
              <div className="control">
                <button className="button is-primary" type="submit">
                  Save
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </>
);
