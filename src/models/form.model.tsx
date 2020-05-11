export interface Student {
  firstName: string;
  lastName: string;
  address: string;
  city: string;
  phone: string;
  gpa: number;
}

export interface FormProps {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onSave: (event: React.FormEvent) => void;
  student: Student;
}
