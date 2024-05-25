import React, { useContext } from "react";
import { employees } from "../data";
import { EmployeeContext } from "../context";
const EmployeeList = () => {
  const { state, dispatch } = useContext(EmployeeContext);
  /* const handleAdd = () => {

  }; */
  return (
    <div className="emp">
      <h2 style={{ textAlign: "center" }}>Employee</h2>
      <ul className="ul">
        {state.employees.map((emp) => (
          <li key={emp.id} className={emp.added ? "disabled" : ""}>
            {" "}
            <h4>{emp.first_name}</h4> <p>{emp.age}</p>
            {employees.added ?? (
              <button
                onClick={() => {
                  dispatch({ type: "ADD", payload: emp });
                }}
              >
                Add
              </button>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EmployeeList;
