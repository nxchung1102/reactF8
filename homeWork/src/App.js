import './App.css';
import { useState, useEffect } from "react";

const tables = [2, 3, 4, 5, 6, 7, 8, 9];

function App() {
  const [type, setType] = useState(2);
  const [multiplicationTable, setMultiplicationTable] = useState([]);

  useEffect(() => {
    const table = [];
    for (let i = 1; i <= 9; i++) {
      table.push(
        <div key={i}>
          <p>{`${type} x ${i} = ${type * i}`}</p>
        </div>
      );
    }
    setMultiplicationTable(table);
  }, [type]);

  return (
    <div>
      {tables.map(table => (
        <button
          onClick={() => setType(table)}
          key={table}>
          {table}
        </button>
      ))}
      <div>
        {multiplicationTable}
      </div>
    </div>
  );
}

export default App;
