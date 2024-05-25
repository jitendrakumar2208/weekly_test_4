import { Children, createContext, useReducer } from "react";
import { employees } from "../data";
export const EmployeeContext = createContext();
const initialState = {
  employees: employees,
  teams: [],
};
const reducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      return {
        employees: state.employees.map((emp) =>
          emp.id === action.payload.id ? { ...emp, added: true } : emp
        ),
        teams: [...state.teams, action.payload],
      };
    case "REMOVE_FROM_TEAM":
      return {
        ...state,
        employees: state.employees.map((emp) =>
          emp.id === action.payload.id ? { ...emp, added: false } : emp
        ),
        teams: state.teams.filter((member) => member.id !== action.payload.id),
      };

    default:
      return state;
  }
};
export const EmployeeComntextProvier = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <EmployeeContext.Provider value={{ state, dispatch }}>
      {children}
    </EmployeeContext.Provider>
  );
};
