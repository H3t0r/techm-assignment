import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { useStore } from '../store/store';

interface StudentPageProps extends RouteComponentProps<{ id: string }> {}

export const StudentPage: React.FC<StudentPageProps> = ({ history, match }) => {
  const { id } = match.params;
  const store = useStore();
  const student = store.getStudent(id);

  return (
    <ul>
      <li>{student?.firstName}</li>
      <li>{student?.lastName}</li>
      <li>{student?.phone}</li>
      <li>{student?.gpa}</li>
    </ul>
  );
};
