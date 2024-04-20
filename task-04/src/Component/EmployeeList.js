import React, { useState } from "react";
import "./Employee.css";

const EmployeeList = ({
  employees,
  departments,
  age,
  toggleAvailability,
  openEditModal,
  setEmployees,
}) => {
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [editEmployee, setEditEmployee] = useState({
    id: "",
    name: "",
    designation: "",
    department: "",
    age:"",
  }); 

  const [searchQuery, setSearchQuery] = useState("");

  // Filter employees based on search query
  const filteredEmployees = employees.filter((employee) => {
    const search = searchQuery.trim().toLowerCase(); 
    return (
      employee.name.toLowerCase().includes(search) ||
      employee.designation.toLowerCase().includes(search) ||
      employee.department.toLowerCase().includes(search)
    );
  });

  const handleEdit = (employee) => {
    setEditEmployee(employee);
    setIsEditModalOpen(true);
  };

  const handleDelete = (employeeId) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this employee?"
    );
    if (confirmDelete) {
      const updatedEmployees = employees.filter(
        (employee) => employee.id !== employeeId
      );
      setEmployees(updatedEmployees);
    }
  };

  const handleUpdate = () => {
    // Find the index of the edited employee in the employees array
    const index = employees.findIndex((emp) => emp.id === editEmployee.id);

    // Make a copy of the employees array to avoid mutating state directly
    const updatedEmployees = [...employees];

    // Update the employee with the new name and designation
    updatedEmployees[index] = { ...editEmployee };

    // Update the state with the updated employees array
    setEmployees(updatedEmployees);

    // Close the modal after updating
    setIsEditModalOpen(false);
  };

  return (
    <div className="employee-list">
      <div className="searching">
        <label>Search the item and click enter to view the result</label>
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search by name or designation"
        />
      </div>
      {isEditModalOpen && (
        <div className="modal open">
          <div className="modal-content">
            <span className="close" onClick={() => setIsEditModalOpen(false)}>
              &times;
            </span>
            <form className="form-modal">
              <label>Name:</label>
              <input
                type="text"
                value={editEmployee.name}
                onChange={(e) =>
                  setEditEmployee({ ...editEmployee, name: e.target.value })
                }
                required
              />
              <label>Designation:</label>
              <input
                type="text"
                value={editEmployee.designation}
                onChange={(e) =>
                  setEditEmployee({
                    ...editEmployee,
                    designation: e.target.value,
                  })
                }
                required
              />
              <label>Department:</label>
              <select
                value={editEmployee.department}
                onChange={(e) =>
                  setEditEmployee({
                    ...editEmployee,
                    department: e.target.value,
                  })
                }
                required
              >
                
                <option value="">Select Department</option>
              <option value="Frontend Development">Frontend Development</option>
              <option value="Backend Development">Backend Development</option>
              <option value="Testing">Testing</option>
              <option value="Deployment">Deployment</option>
              </select>
              <input type="number" value={editEmployee.age} onChange={(e) =>   setEditEmployee({
                    ...editEmployee,
                    age: e.target.value,
                  })} required />

              <button type="button" className="button" onClick={handleUpdate}>
                Update
              </button>{" "}
              {/* Add the Update button */}
            </form>
          </div>
        </div>
      )}

      <h2>Employee List</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Designation</th>
            <th>Department</th>
            <th>Available</th>
            <th>Age</th>
            <th>Edit</th>
            <th>Delete</th> {/* Add the Delete column header */}
          </tr>
        </thead>
        <tbody>
          {filteredEmployees.map((employee) => (
            <tr key={employee.id}>
              <td>{employee.name}</td>
              <td>{employee.designation}</td>
              <td>{employee.department}</td>
              
              <td>
                <input
                  type="checkbox"
                  checked={employee.available}
                  onChange={() => toggleAvailability(employee.id)}
                />
              </td>
              <td>{employee.age}</td>
              <td>
                <button onClick={() => handleEdit(employee)}>Edit</button>
              </td>
              <td>
                {" "}
                {/* Delete button */}
                <button onClick={() => handleDelete(employee.id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EmployeeList;
