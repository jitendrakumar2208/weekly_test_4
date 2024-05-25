import React, { useContext } from "react";
import { employees } from "../data";
import { EmployeeContext } from "../context";
import "./teams.css";
const Teams = () => {
  const { state, dispatch } = useContext(EmployeeContext);
  function calculateAverageAge(ages) {
    if (ages.length === 0) return 0; // Handle case with empty array

    // Calculate the sum of all ages
    const sum = ages.reduce((acc, { age }) => acc + age, 0);

    // Calculate the average
    const average = sum / ages.length;

    return average;
  }
  return (
    <div className="teams">
      <div style={{ width: "100%" }}>
        <h2>Teams</h2>
        {
          <ul className="ul">
            {state.teams.map((emp) => (
              <li>
                {" "}
                <h4>{emp.first_name}</h4> <p>{emp.age}</p>
                <button
                  onClick={() => {
                    dispatch({ type: "REMOVE_FROM_TEAM", payload: emp });
                  }}
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
        }
      </div>

      <div className="avg">
        <p>Average Age </p>
        <p>{calculateAverageAge(state.teams)}</p>
      </div>
    </div>
  );
};

export default Teams;
