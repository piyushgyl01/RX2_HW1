import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import IncomeExpenseForm from "./IncomeExpenseForm.jsx";
import FinanceSummary from "./FinanceSummary.jsx";
import "./App.css";

function App() {
  return (
    <>
      <main>
        <h1>FINACE APP HUH? 🤨</h1>
        <IncomeExpenseForm />
        <FinanceSummary />
      </main>
    </>
  );
}

export default App;
