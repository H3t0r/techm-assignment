import React from 'react';
import { Student } from '../models/form.model';

interface StudentListProps {
  onDelete: (student: Student) => void;
  onSelect: (student: Student) => void;
  studentList: Student[];
}

export const StudentList: React.FC<StudentListProps> = ({ onDelete, onSelect, studentList }) => (
  <ul>
    {studentList.map((student) => (
      <li key={student.id} onClick={() => onSelect(student)}>
        {student.firstName}
        <button onClick={() => onDelete(student)}>delete</button>
      </li>
    ))}
  </ul>
);
