import { observer } from 'mobx-react';
import { Student } from '../models/form.model';
import { StudentForm } from './StudentForm';
import { useStore } from '../store/store';
import React, { useState } from 'react';
import { RouteComponentProps } from 'react-router-dom';

interface AddStudentPageProps extends RouteComponentProps<any> {}

export const AddStudentPage: React.FC<AddStudentPageProps> = observer(({ history }) => {
  const newStudent: Student = {
    address: '',
    city: '',
    firstName: '',
    gpa: 0,
    id: 0,
    lastName: '',
    phone: '',
  };
  const [student, setStudent] = useState<Student>({ ...newStudent, id: Date.now() });
  const store = useStore();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = event.target;

    setStudent((previous) => ({ ...previous, [name]: value }));
  };

  const handleSave = (event: React.FormEvent): void => {
    event.preventDefault();
    store.addStudent(student);
    history.push('/');
  };

  return <StudentForm onChange={handleChange} onSave={handleSave} student={student} />;
});
