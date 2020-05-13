import React from 'react';
import { Student } from '../models/form.model';

interface StudentListProps {
  onDelete: (student: Student) => void;
  onSelect: (student: Student) => void;
  studentList: Student[];
}

export const StudentList: React.FC<StudentListProps> = ({ onDelete, onSelect, studentList }) => {
  const renderTHead = () => (
    <thead>
      <tr>
        <th>First Name</th>
        <th>Last Name</th>
        <th>Phone</th>
        <th>GPA</th>
        <th>Actions</th>
      </tr>
    </thead>
  );

  const renderTBody = () => <tbody>{studentList.map(renderRows)}</tbody>;

  const renderRows = (student: Student) => {
    return (
      <tr key={student.id} onClick={() => onSelect(student)}>
        <td>{student.firstName}</td>
        <td>{student.lastName}</td>
        <td>{student.phone}</td>
        <td>{student.gpa}</td>
        <td>
          <button
            className="button is-danger is-outlined is-small"
            onClick={(e) => {
              e.stopPropagation();
              onDelete(student);
            }}
          >
            delete
          </button>
        </td>
      </tr>
    );
  };

  return (
    <>
      <h2 className="title">Student List</h2>
      <div className="box">
        <table className="table is-striped is-hoverable is-fullwidth">
          {renderTHead()}
          {renderTBody()}
        </table>
      </div>
    </>
  );
};
