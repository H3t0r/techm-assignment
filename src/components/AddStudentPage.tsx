import React, { useState } from 'react';
import { StudentForm } from './StudentForm';
import { Student } from '../models/form.model';

export const AddStudentPage: React.FC = () => {
  const newStudent: Student = {
    firstName: '',
    lastName: '',
    address: '',
    city: '',
    phone: '',
    gpa: 0,
  };
  const [student, setStudent] = useState<Student>({ ...newStudent });

  function handleChange(event: React.ChangeEvent<HTMLInputElement>): void {
    const { name, value } = event.target;

    setStudent((previous) => ({ ...previous, [name]: value }));
  }

  function handleSave(event: React.FormEvent): void {
    event.preventDefault();

    console.log(student);
  }

  return <StudentForm onChange={handleChange} onSave={handleSave} student={student} />;
};
