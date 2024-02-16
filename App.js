import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar,Container,Nav, Modal } from 'react-bootstrap';
//import { BsPeopleFill, BsTable } from 'react-icons/bs';
import RegistrationPage from './RegistrationPage';
import Usertable from './Usertable';
//import './components/register.css'

const App = () => {
  const [users, setUsers] = useState([]); //users' will hold an array of user objects, and 'setUsers' is a function to update the 'users' state.
  const [editingIndex, setEditingIndex] = useState(null);//holds the indext of the user being edited
  const [editedUser, setEditedUser] = useState(null); // holds the data of the user being edited
  const [showModal, setShowModal] = useState(false);

  const handleAddUser = (user) => {  //this function updates the users state by adding a new user object to the end of the existing array while preserving the previous state
    setUsers((prevUsers) => [...prevUsers, { ...user }]);//creates a new array containing all the elements of the previous users array (prevUsers) using the spread operator ..., and then adds a new user object ({ ...user }) to the end of the array. The spread operator { ...user } is used to create a shallow copy of the user object passed as a parameter, ensuring that the original user object remains unchanged
  };

  const handleEditUser = (index) => {
    setEditingIndex(index);
    setEditedUser(users[index]);
    handleShowModal();//triggers the display of the modal by updating the state variable showModal to true.
  };

  const handleDeleteUser = (index) => {
    const updatedUsers = [...users];// creates a shallow copy of the users array using the spread operator (...). This ensures that the original users array remains unchanged.
    updatedUsers.splice(index, 1);
    setUsers(updatedUsers);
    setEditingIndex(null);
    setEditedUser(null);
  };

  const handleUpdateUser = (user) => {

    const updatedUsers = [...users];
    updatedUsers[editingIndex] = { ...user };
    setUsers(updatedUsers);
    setEditingIndex(null);
    setEditedUser(null);
    handleCloseModal();
  };

  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => {
    setShowModal(false);
    setEditingIndex(null);
    setEditedUser(null);
  };

  return (
    
    <>
      {/* <Navbar bg="light" variant="light" expand="lg">
        <Container>
          <Navbar.Brand href="#">
            <BsPeopleFill className="mr-2" />
            User Registration
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbar-nav" />
          <Navbar.Collapse id="navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link href="#" onClick={handleShowModal}>
                <BsPeopleFill className="mr-1" />
                Edit Users
              </Nav.Link>
              <Nav.Link href="#">
                <BsTable className="mr-1" />
                User Table
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar> */}
      <div className="row mt-4">
        <div className="col-md-6 offset-md-3">
          <h1 className="text-center mb-4">Registration Form</h1>
          <RegistrationPage
            onAddUser={handleAddUser}
          />
        </div>
      </div>
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Form</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <RegistrationPage
            onAddUser={editingIndex !== null ? handleUpdateUser : handleAddUser}
            editedUser={editedUser}
          />
        </Modal.Body>
      </Modal>
      <div className="row mt-4">
        <div className="col-md-12">
          <hr className="my-4" />
          <h1 className="text-center mb-4">User Data</h1>
          <Usertable users={users} onEditUser={handleEditUser} onDeleteUser={handleDeleteUser} />
        </div>
      </div>
     {/* <footer className="bg-dark text-light text-center py-2">
     <p>&copy; 2024 Project Management</p>
   </footer> */}
 </>
  );
};

export default App;
