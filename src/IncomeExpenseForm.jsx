import { useState } from "react";


export default function IncomeExpenseForm() {
  const [amount, setAmount] = useState(0);

    const handleAddIncome = () => {}

    const handleAddExpense = () => {}


  return (
    <div>
      <input
        type="number"
        placeholder=""
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <button onClick={handleAddIncome}>Add Income</button>
      <button onClick={handleAddExpense}>Add Expense</button>
    </div>
  );
}
