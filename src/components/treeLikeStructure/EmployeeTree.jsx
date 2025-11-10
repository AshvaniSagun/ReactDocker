import React from "react";
import './EmployeeTree.css'

// Recursive TreeNode component
const TreeNode = ({ employee, employees }) => {
  // Find all direct reports for this employee
  const subordinates = employees.filter(e => e.MgrId === employee.Eid);

  return (
    <li className="tree-node"> 
      <span className="tree-label">
        {employee.Fname} {employee.Lname}
      </span>
      {subordinates.length > 0 && (
        <ul className="tree-children">
          {subordinates.map(sub => (
            <TreeNode key={sub.Eid} employee={sub} employees={employees} />
          ))}
        </ul>
      )}
    </li>
  );
};

// Main Tree Component
const EmployeeTree = ({ employees }) => {
  // Find the top-level employee(s) (no manager)
  const roots = employees.filter(e => !e.MgrId);

  return (
    <div>
      <h2>Employee Hierarchy</h2>
      <ul>
        {roots.map(root => (
          <TreeNode key={root.Eid} employee={root} employees={employees} />
        ))}
      </ul>
    </div>
  );
};

export default EmployeeTree;
