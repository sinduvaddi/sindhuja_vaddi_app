import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Select from "react-select";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const EditProfile = () => {
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [dob, setDob] = useState();
  const [gender, setGender] = useState("Male");
  const [agreeTnc, setAgreeTnc] = useState(false);

  const options = [
    { value: "Male", label: "Male" },
    { value: "Female", label: "Female" }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <h1>Log in form</h1>
      <form onSubmit={(e) => handleSubmit(e)}>
        <div>
          <div>
            <label>First Name</label>
            <input
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              placeholder="enter your first name"
              required
            />
          </div>

          <div>
            <label>Last Name</label>
            <input
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              placeholder="enter your last name"
              required
            />
          </div>
        </div>

        <div>
          <label>Date of your birth</label>
          <DatePicker
            selected={dob}
            onChange={(dob) => setDob(dob)}
            dateFormat="dd-MM-yyyy"
            maxDate={new Date()}
            required
            placeholderText="dd-mm-yyyy"
          ></DatePicker>
        </div>

        <div>
          <label>Select Gender</label>
          <Select
            options={options}
            onChange={(e) => setGender(e.value)}
            required
          />
        </div>

        <div>
          <label>Agree Terms and Conditions</label>
          <input
            type="checkbox"
            value={agreeTnc}
            onChange={(e) => setAgreeTnc(e.target.value)}
            required
          />
        </div>

        <div>
          <button type="submit">Register</button>
        </div>
      </form>
    </div>
  );
};

export default EditProfile;
