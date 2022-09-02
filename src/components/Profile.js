import axios from 'axios';
import React, { useState } from 'react';
import { toast } from 'react-toastify';

function Profile() {

  const [number, setNumber] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [gender, setGender] = useState("");
  const [age, setAge] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if(!number || !dateOfBirth || !gender || !age){
      return alert("Please fill all the fields !")
    }
    try {
      const response = await axios.post("https://mern-login-register-profile.herokuapp.com/profile", {
        number, dateOfBirth, gender, age
      });
      toast.success(response.data) 
    } catch (err) {
      toast.error(err.response.data);
    }
  }

  return (
    <div className="profilecontainer">
      <form onSubmit={handleSubmit}>
        <div class="form-group">
          <h2 className="pro">Profile Update</h2>
          <label>Mobile Number</label>
          <input
            type="text"
            class="form-control"
            placeholder="**********"
            minLength="10"
            value={number}
            onChange={e => setNumber(e.target.value)}
          />
        </div>
        <div class="form-group">
          <label>Date of Birth</label>
          <input
            type="date"
            class="form-control"
            value={dateOfBirth}
            onChange={e => setDateOfBirth(e.target.value)}
          />
        </div>
        <div class="form-group">
          <label>Gender</label>
          <input
            type="text"
            class="form-control"
            placeholder="Gender"
            value={gender}
            onChange={e => setGender(e.target.value)}
          />
        </div>
        <div class="form-group">
          <label>Age</label>
          <input
            type="text"
            class="form-control"
            placeholder="Age"
            value={age}
            onChange={e => setAge(e.target.value)}
          />
        </div>
        <button type="submit" class="btn btn-success">Update</button>
      </form>
    </div>
  )
}

export default Profile;