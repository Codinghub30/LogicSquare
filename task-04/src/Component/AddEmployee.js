// AddEmployee.js
import React, { useState } from 'react';
import "./AddEmplyee.css"

const AddEmployee = ({ isOpen, onClose, addEmployee }) => {
  const [name, setName] = useState('');
  const [designation, setDesignation] = useState('');
  const [department, setDepartment] = useState('');
  const [age, setAge] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addEmployee(name, designation, department, age);
    onClose();
    // Reset input fields
    setName('');
    setDesignation('');
    setDepartment('');
    setAge('');
  };

  return (
    <div className={`modal ${isOpen ? 'open' : ''}`}>
        {isOpen &&(
      <div className="modal-content">
        <span className="close" onClick={onClose}>&times;</span>
        <form  className='form-modal' onSubmit={handleSubmit}>
          <label>Name:</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
          <label>Designation:</label>
          <input type="text" value={designation} onChange={(e) => setDesignation(e.target.value)} required />
          <select value={department} onChange={(e) => setDepartment(e.target.value)} required>
              <option value="">Select Department</option>
              <option value="Frontend Development">Frontend Development</option>
              <option value="Backend Development">Backend Development</option>
              <option value="Testing">Testing</option>
              <option value="Deployment">Deployment</option>
            </select>
            <label>Age:</label>
            <input type="text" value={age} onChange={(e) => setAge(e.target.value)} required />
          <button type="submit">Add Employee</button>
        </form>
      </div>
        )}
    </div>
  );
};

export default AddEmployee;
