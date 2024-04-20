// Dashboard.js
import React from 'react';
import "./Dashboard.css"

const Dashboard = ({ totalEmployees, availableEmployees, openModal }) => {
  return (
    <div className='main'>
      <div className="dashboard">
        <div className="overview">
          <h2>Dashboard</h2>
          <p>Total Employees: {totalEmployees}</p>
          <p>Available Employees: {availableEmployees}</p>
        </div>
        <div className="actions">
          <button onClick={openModal}>Add Employee</button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
