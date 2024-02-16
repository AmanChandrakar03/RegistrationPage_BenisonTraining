import React from 'react';

const Usertable = ({ users, onEditUser, onDeleteUser }) => {
  console.log('Users in table ', users);

  return (
    <table  className="table table-bordered mt-4 text-center"style={{ width: '100%', borderCollapse: 'collapse', border: '1px solid #ddd' }}>
      <thead>
        <tr>
          <th>SNo</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Age</th>
          <th>Gender</th>
          <th>Contact Number</th>
          <th>Country</th>
          <th>State</th>
          <th>City</th>
          <th>Address</th>
          <th>Edit/Delete</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user, index) => (
          <tr key={index} style={{ borderBottom: '1px solid #ddd' }}>
            <td>{index + 1}</td>
            <td>{user.firstName}</td>
            <td>{user.lastName}</td>
            <td>{user.age}</td>
            <td>{user.gender}</td>
            <td>{user.contactNo}</td>
            <td>{user.country}</td>
            <td>{user.state}</td>
            <td>{user.city}</td>
            <td>{user.address}</td>
            <td>
              <button className="btn btn-primary btn-sm mr-2" onClick={() => onEditUser(index)}>Edit</button>
              <button  className="btn btn-danger btn-sm" onClick={() => onDeleteUser(index)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Usertable;
