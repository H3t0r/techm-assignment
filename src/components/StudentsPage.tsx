import React from 'react';
import { observer } from 'mobx-react';
import { useStore } from '../store/store';
import { Redirect, RouteComponentProps } from 'react-router-dom';
import { StudentList } from './StudentList';
import { Student } from '../models/form.model';

interface StudentsPageProps extends RouteComponentProps {}
export const StudentsPage: React.FC<StudentsPageProps> = observer(({ history }) => {
  const store = useStore();

  const handleDelete = (student: Student) => {
    store.deleteStudent(student);
  };

  const handleSelect = (student: Student) => {
    history.push(`/student/${student.id}`);
  };

  return (
    <>
      {store.studentList.length === 0 && <Redirect to="/student" />}
      <StudentList onDelete={handleDelete} onSelect={handleSelect} studentList={store.studentList}></StudentList>
    </>
  );
});
