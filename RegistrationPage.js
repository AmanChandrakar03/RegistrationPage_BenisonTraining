import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
//import "./components/register.css";


const RegistrationForm = ({ onAddUser, editedUser }) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    age: "",
    gender: "",
    contactNo: "",
    country: "",
    state: "",
    city: "",
    address: "",
  });
  const [Error, setError] = useState("");
  const [firstNameError, setFirstNameError] = useState("");
  const [LastNameError, setLastNameError] = useState("");
  const [ageError, setageError] = useState("");
  const[genderError,setGenderError] = useState("")

  const [contactrror, setcontactError] = useState("");
  const [countryError, setcountryError] = useState("");
  const [stateError, setstateError] = useState("");
  const [cityError, setcityError] = useState("");
  const [addressError, setaddressError] = useState("");
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'contactNo') {
        if (!/^\d*$/.test(value)) {
          setError("Only numbers are allowed");
        } else if (value.length !== 10) {
          setError("Contact number must be 10 digits");
        } else {
          setError("");// Clearing the error if the value is valid
        }
    }
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  // Effect hook to populate form data when editing a user

  useEffect(() => {
    if (editedUser) {
      setFormData(editedUser);
    }
  }, [editedUser]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.firstName.trim() === "") {
      setFirstNameError("First name is required!");
    } else {
      setFirstNameError("");
    }
    if (formData.lastName.trim() === "") {
      setLastNameError("Last name is reuired!");
    } else {
      setLastNameError("");
    }
    if (formData.age.trim() === "") {
      setageError("Age is required!");
    } else {
      setageError("");
    }
    if(formData.gender.trim() == ""){
      setGenderError("Gender is required!");
    }else{
      setGenderError("");
    }
    if (formData.contactNo.trim() === "" ) {
      setcontactError("contact is required!");
    } else {
      setcontactError("");
    }
    if (formData.country.trim() === "") {
      setcountryError("country is required!");
    } else {
     setcountryError("");
    }
    if (formData.state.trim() === "") {
      setstateError("state is required!");
    } else {
      setstateError("");
    }
    if (formData.city.trim() === "") {
      setcityError("city is required!");
    } else {
      setcityError("");
    } 
    if (formData.address.trim() === "") {
      setaddressError("address is required!");
    } else {
      setaddressError("");
    }
    if (Object.values(formData).every((field) => field.trim() !== "" && firstNameError === "" && Error === "")) { //checks if every value in the formData object is not empty (field.trim() !== "") and if both firstNameError and Error are empty.
      onAddUser(formData);
      setFormData({ // Resetting the form data after submission
        firstName: "",
        lastName: "",
        age: "",
        gender: "",
        contactNo: "",
        country: "",
        state: "",
        city: "",
        address: "",
      });
    }
  };

  const handleClear = () => {
    setFormData({
      firstName: "",
      lastName: "",
      age: "",
      gender: "",
      contactNo: "",
      country: "",
      state: "",
      city: "",
      address: "",
    });
    setError("");
  };

  return (
    <div className="container">
       <div className="border rounded p-4">
      <form className="needs-validation" noValidate onSubmit={handleSubmit}>
        <div className="row mb-3">
          <div className="col-md-6">
            <label htmlFor="validationCustom01" className="form-label">
              First name
            </label>
            <input
              type="text"
              autoComplete="off"
              className={`form-control ${firstNameError && formData.firstName.trim() === "" ? "is-invalid" : ""}`}
              id="validationCustom01"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
            {firstNameError && formData.firstName.trim() === "" && (
              <div className="invalid-feedback">First name required!</div>
            )}
          </div>

          <div className="col-md-6">
            <label htmlFor="validationCustom02" className="form-label">
              Last name
            </label>
            <input
              type="text"
              autoComplete="off"
              className={`form-control ${LastNameError && formData.lastName.trim() === "" ? "is-invalid" : ""}`}
              id="validationCustom02"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
            {LastNameError && formData.lastName.trim() === "" && (
              <div className="invalid-feedback">Last name required!</div>
            )}
          </div>
        </div>

        <div className="row mb-3">
          <div className="col-md-6">
            <label htmlFor="validationCustom03" className="form-label">
              Age
            </label>
            <input
              type="number"
              autoComplete="off"
              className={`form-control ${ageError && formData.age.trim() === "" ? "is-invalid" : ""}`}
              id="validationCustom03"
              name="age"
              value={formData.age}
              onChange={handleChange}
              required
            />
            {ageError && formData.age.trim() === "" && (
              <div className="invalid-feedback">Age is required!</div>
            )}
          </div>

          <div className="col-md-6">
            <label className="form-label d-block">Gender</label>
            <div>
              <div className="form-check form-check-inline">
                <input
                  autoComplete="off"
                  type="radio"
                  className="form-check-input"
                  id="male"
                  name="gender"
                  value="male"
                  checked={formData.gender === "male"}
                  onChange={handleChange}
                  required
                />
                <label className="form-check-label" htmlFor="male">
                  Male
                </label>
              </div>

              <div className="form-check form-check-inline">
                <input
                  autoComplete="off"
                  type="radio"
                  className="form-check-input"
                  id="female"
                  name="gender"
                  value="female"
                  checked={formData.gender === "female"}
                  onChange={handleChange}
                  required
                />
                <label className="form-check-label" htmlFor="female">
                  Female
                </label>
              </div>
            </div>
          </div>
        </div>

        <div className="row mb-3">
          <div className="col-md-6">
            <label htmlFor="validationCustom04" className="form-label">
              Contact No
            </label>
            <input
              type="text"
              autoComplete="off"
              className={`form-control ${contactrror && formData.contactNo.trim() === "" ? "is-invalid" : ""}`}
              id="validationCustom04"
              name="contactNo"
              value={formData.contactNo}
              onChange={handleChange}
              required
            />
            {contactrror && formData.contactNo.trim() === "" && (
              <div className="invalid-feedback">Contact is required!</div>
            )}
            {Error && (
              <div className="invalid-feedback">{Error}</div>
            )}
          </div>

          <div className="col-md-6">
            <label htmlFor="validationCustom05" className="form-label">
              Country
            </label>
            <input
              type="text"
              autoComplete="off"
              className={`form-control ${countryError && formData.country.trim() === "" ? "is-invalid" : ""}`}
              id="validationCustom05"
              name="country"
              value={formData.country}
              onChange={handleChange}
              required
            />
            {countryError && formData.country.trim() === "" && (
              <div className="invalid-feedback">Country is required!</div>
            )}
          </div>
        </div>

        <div className="row mb-3">
          <div className="col-md-6">
            <label htmlFor="validationCustom06" className="form-label">
              State
            </label>
            <input
              type="text"
              autoComplete="off"
              className={`form-control ${stateError && formData.state.trim() === "" ? "is-invalid" : ""}`}
              id="validationCustom06"
              name="state"
              value={formData.state}
              onChange={handleChange}
              required
            />
            {stateError && formData.state.trim() === "" && (
              <div className="invalid-feedback">State is required!</div>
            )}
          </div>

          <div className="col-md-6">
            <label htmlFor="validationCustom07" className="form-label">
              City
            </label>
            <input
              type="text"
              autoComplete="off"
              className={`form-control ${cityError && formData.city.trim() === "" ? "is-invalid" : ""}`}
              id="validationCustom07"
              name="city"
              value={formData.city}
              onChange={handleChange}
              required
            />
            {cityError && formData.city.trim() === "" && (
              <div className="invalid-feedback">City is required!</div>
            )}
          </div>
        </div>

        <div className="row mb-3">
          <div className="col-md-12">
            <label htmlFor="validationCustom08" className="form-label">
              Address
            </label>
            <textarea
              autoComplete="off"
              className={`form-control ${addressError && formData.address.trim() === "" ? "is-invalid" : ""}`}
              id="validationCustom08"
              name="address"
              value={formData.address}
              onChange={handleChange}
              required
            />
            {addressError && formData.address.trim() === "" && (
              <div className="invalid-feedback">Address is required!</div>
            )}
          </div>
        </div>
        <div className="submitClear">
        <div className="row mb-3">
          <div className="col-md-12">
            <button className="btn btn-primary me-3" type="submit">
              Submit
            </button>
            <button className="btn btn-secondary" type="button" onClick={handleClear}>
              Clear
            </button>
          </div>
        </div>
        </div>
      </form>
      </div>
    </div>
  );
};

export default RegistrationForm;

