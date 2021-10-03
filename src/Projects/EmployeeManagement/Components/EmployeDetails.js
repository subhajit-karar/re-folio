import React, { useState } from "react";

function EmployeDetails() {
  const [employees, setEmployee] = useState([]);

  const [fname, setfName] = useState();
  const [lname, setLName] = useState();
  const [dob, setDOB] = useState();
  const [designation, setDesignation] = useState();
  const [exp, setExp] = useState();

  const addHandler = () => {
    let tempEmployess = [...employees];
    let obj = {
      id: tempEmployess.length + 1,
      fname: fname,
      lname: lname,
      dob: dob,
      designation: designation,
      exp: exp,
    };
    console.log("obj", obj);
    tempEmployess.push(obj);
    setEmployee(tempEmployess);
    console.log("employees", employees);
  };

  const deleteHandler = (id) => {
     let tempEmployess = [...employees];

     console.log(tempEmployess);
     let tempEmployess2 = tempEmployess.filter(item=>{
         if(item.id !== id) return item;
         else return false                                                                      
     });
     console.log(tempEmployess2);
     setEmployee(tempEmployess2);
  };

  let employeeDisplay = employees.map((emp) => {
    return (
      <tr key={emp.id}>
        <td>{emp.fname}</td>
        <td>{emp.lname}</td>
        <td>{emp.dob}</td>
        <td>{emp.designation}</td>
        <td>{emp.exp}</td>
        <td>
          <button onClick={()=>deleteHandler(emp.id)} className="btn btn-danger">
            Delete{" "}
          </button>
        </td>
      </tr>
    );
  });

  return (
    <div className="container">
      <h3 className="mb-2 text-left">Add Employee</h3>
      <form
        className="form-inline mb-5"
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <div className="form-group">
          <input
            placeholder="First name"
            type="text"
            id="fname"
            className="form-control"
            value={fname}
            onChange={(e) => setfName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <input
            placeholder="Last name"
            type="text"
            className="form-control"
            value={lname}
            onChange={(e) => setLName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <input
            placeholder="Date of Birth"
            type="date"
            className="form-control"
            value={dob}
            onChange={(e) => setDOB(e.target.value)}
          />
        </div>
        <div className="form-group">
          <input
            placeholder="Designation"
            type="text"
            className="form-control"
            value={designation}
            onChange={(e) => setDesignation(e.target.value)}
          />
        </div>
        <div className="form-group">
          <input
            placeholder="Experience"
            type="text"
            className="form-control"
            value={exp}
            onChange={(e) => setExp(e.target.value)}
          />
        </div>
        <div className="form-group">
          <button onClick={addHandler} className="btn btn-primary">
            Add Employee{" "}
          </button>
        </div>
      </form>

      <div>
        <h3 className="mb-2 text-left">Display Employee List</h3>
        <table className="table table-striped">
          <thead>
            <tr>
              <td>First Name</td>
              <td>Last Name</td>
              <td>Date of Birth</td>
              <td>Designation</td>
              <td>Experience</td>
              <td></td>
            </tr>
          </thead>
          <tbody>{employeeDisplay}</tbody>
        </table>
      </div>
    </div>
  );
}

export default EmployeDetails;
