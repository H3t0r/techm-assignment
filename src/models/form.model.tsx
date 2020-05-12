export interface Student {
  address: string;
  city: string;
  firstName: string;
  gpa: number;
  id: number;
  lastName: string;
  phone: string;
}

export interface FormProps {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onSave: (event: React.FormEvent) => void;
  student: Student;
}
