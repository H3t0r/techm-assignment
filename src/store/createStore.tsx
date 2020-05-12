import { Student } from '../models/form.model';

export const createStore = () => ({
  studentList: [] as Student[],
  addStudent(student: Student) {
    this.studentList.push(student);
  },
  deleteStudent(student: Student) {
    const newList = this.studentList.filter((currentStudent) => currentStudent.id !== student.id);
    this.studentList = [...newList];
  },
  // getStudent(id: number): Student {
  //   const student = this.studentList.find((student: Student) => student.id === id);

  //   return student;
  // }
});

export type StudentStore = ReturnType<typeof createStore>;
