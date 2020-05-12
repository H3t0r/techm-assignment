export interface Student {
  address: string;
  city: string;
  firstName: string;
  gpa: string;
  id: number;
  lastName: string;
  phone: string;
  photo?: string;
}

export interface FormProps {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onSave: (event: React.FormEvent) => void;
  student: Student;
}
