import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import IncomeExpenseForm from "./IncomeExpenseForm.jsx";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <main>
        <h1>FINACE APP HUH? 🤨</h1>
        <IncomeExpenseForm />
      </main>
    </>
  );
}

export default App;
