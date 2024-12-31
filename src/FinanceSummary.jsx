import { useSelector } from "react-redux";

export default function FinanceSummary() {
  const income = useSelector((state) => state.income);
  const expenses = useSelector((state) => state.expenses);

  return (
    <main>
      <h1>Finace Summary</h1>
      <p>Income: {income}</p>
      <p>Expenses: {expenses}</p>
      <p>Balance: {income-expenses}</p>
    </main>
  );
}
