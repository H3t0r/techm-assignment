import React from 'react';
import { FormProps } from '../models/form.model';

export const StudentForm: React.FC<FormProps> = ({ onChange, onSave, student }) => (
  <form onSubmit={onSave}>
    <label htmlFor="firstName">First Name</label>
    <input type="text" name="firstName" onChange={onChange} value={student.firstName} />
    <label htmlFor="lastName">Last Name</label>
    <input type="text" name="lastName" onChange={onChange} value={student.lastName} />
    <label htmlFor="address">Address</label>
    <input type="text" name="address" onChange={onChange} value={student.address} />
    <label htmlFor="city">City</label>
    <input type="text" name="city" onChange={onChange} value={student.city} />
    <label htmlFor="phone">Phone</label>
    <input type="tel" name="phone" onChange={onChange} value={student.phone} />
    <label htmlFor="gpa">GPA</label>
    <input type="number" name="gpa" onChange={onChange} value={student.gpa} />
    <button type="submit">Save</button>
  </form>
);
