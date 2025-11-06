import React from "react";
import EmployeeTree from "./EmployeeTree";

const employees = [
  { Eid: 1, Fname: "Chan", Lname: "May", MgrId: null },
  { Eid: 2, Fname: "Shiv", Lname: "Narang", MgrId: 1 },
  { Eid: 3, Fname: "Sung", Lname: "Li", MgrId: 1 },
  { Eid: 4, Fname: "Kuk", Lname: "Pu", MgrId: 2 },
  { Eid: 5, Fname: "Jack", Lname: "Ansel", MgrId: 3 },
  { Eid: 6, Fname: "Roger", Lname: "Park", MgrId: 4 },
];

function TreeComponent() {
  return (
    <div style={{ fontFamily: "Arial", margin: "20px" }}>
      <EmployeeTree employees={employees} />
    </div>
  );
}

export default TreeComponent;
