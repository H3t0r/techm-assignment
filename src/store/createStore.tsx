import { Student } from '../models/form.model';
import { mock } from './mockData';

const studentList: Student[] = mock;

export const createStore = () => ({
  studentList,
  addStudent(student: Student) {
    this.studentList.push(student);
  },
  deleteStudent(student: Student) {
    const newList = this.studentList.filter((currentStudent) => currentStudent.id !== student.id);
    this.studentList = [...newList];
  },
  getStudent(id: string) {
    return this.studentList.find((student: Student) => student.id === Number(id));
  },
});

export type StudentStore = ReturnType<typeof createStore>;
