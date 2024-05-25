import { useContext } from "react";
import "./App.css";
import EmployeeList from "./components/EmployeeList";
import Teams from "./components/Teams";
import { EmployeeContext } from "./context";

function App() {
  const { state } = useContext(EmployeeContext);
  console.log(state);
  return (
    <div className="container">
      <EmployeeList />
      <Teams />
    </div>
  );
}

export default App;
