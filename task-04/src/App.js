import React, { useState, useEffect } from 'react';
import Dashboard from './Component/Dashboard';
import EmployeeList from './Component/EmployeeList';
import AddEmployee from './Component/AddEmployee';

const App = () => {
  const [employees, setEmployees] = useState([]);
  const [totalEmployees, setTotalEmployees] = useState(0);
  const [availableEmployees, setAvailableEmployees] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [employeeToEdit, setEmployeeToEdit] = useState(null);
  const [departments, setDepartments] = useState([]);
  const [age, setAge ] = useState([]);


  const openEditModal = (employee) => {
    setEmployeeToEdit(employee);
    setIsAddModalOpen(true);
  };

  useEffect(() => {
    const storedEmployees = JSON.parse(localStorage.getItem('employees')) || [];
    if (storedEmployees.length > 0) {
      // Shuffle the stored employees array
      const shuffledEmployees = [...storedEmployees].sort(() => Math.random() - 0.5);
      setEmployees(shuffledEmployees);
      setTotalEmployees(shuffledEmployees.length);
      const availableCount = shuffledEmployees.filter(employee => employee.available).length;
      setAvailableEmployees(availableCount);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('employees', JSON.stringify(employees));
    setTotalEmployees(employees.length);
    const availableCount = employees.filter(employee => employee.available).length;
    setAvailableEmployees(availableCount);
  }, [employees]);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const addEmployee = (name, designation, department, age) => {
    const newEmployee = {
      id: Math.random().toString(36).substr(2, 9),
      name: name,
      designation: designation,
      department: department,
      age: age,
      available: true
    };
    setEmployees([ newEmployee, ...employees]);
  };

  const toggleAvailability = id => {
    const updatedEmployees = employees.map(employee =>
      employee.id === id ? { ...employee, available: !employee.available } : employee
    );
    setEmployees(updatedEmployees);
  };

  return (
    <div className="container-main" style={{ display: 'flex', gap: '15%', marginLeft: '58px' }}>
      <Dashboard totalEmployees={totalEmployees} availableEmployees={availableEmployees} openModal={openModal} />
      <EmployeeList employees={employees} departments={departments}  age={age} toggleAvailability={toggleAvailability} openEditModal={isAddModalOpen}  setEmployees={setEmployees}  />
      <AddEmployee isOpen={isModalOpen} onClose={closeModal} addEmployee={addEmployee} employeeToEdit={employeeToEdit} />
    </div>
  );
};

export default App;
