import React from 'react';
import { RouteComponentProps, Redirect } from 'react-router-dom';
import { useStore } from '../store/store';
import dummy from '../dummy-prod-1.jpg';

interface StudentPageProps extends RouteComponentProps<{ id: string }> {}

export const StudentPage: React.FC<StudentPageProps> = ({ match }) => {
  const { id } = match.params;
  const store = useStore();
  const student = store.getStudent(id);
  const fullName = `${student?.firstName} ${student?.lastName}`;

  return (
    <>
      {!student && <Redirect to="/" />}
      <h2 className="title">Student Details</h2>
      <nav className="box">
        <div className="columns">
          <div className="column is-one-quarter">
            <img src={student?.photo ? student.photo : dummy} alt={fullName} width="200" />
          </div>
          <div className="column">
            <table className="table is-fullwidth">
              <tbody>
                <tr>
                  <td>
                    <strong>First Name:</strong>
                  </td>
                  <td>{student?.firstName}</td>
                </tr>
                <tr>
                  <td>
                    <strong>Last Name:</strong>
                  </td>
                  <td>{student?.lastName}</td>
                </tr>
                <tr>
                  <td>
                    <strong>Address:</strong>
                  </td>
                  <td>{student?.address}</td>
                </tr>
                <tr>
                  <td>
                    <strong>City:</strong>
                  </td>
                  <td>{student?.city}</td>
                </tr>
                <tr>
                  <td>
                    <strong>Phone:</strong>
                  </td>
                  <td>{student?.phone}</td>
                </tr>
                <tr>
                  <td>
                    <strong>GPA:</strong>
                  </td>
                  <td>{student?.gpa}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </nav>
    </>
  );
};
