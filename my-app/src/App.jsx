import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0);
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [result, setResult] = useState(null);

  const calculate = (op) => {
    const a = parseFloat(num1);
    const b = parseFloat(num2);
    if (isNaN(a) || isNaN(b)) {
      setResult("Enter valid numbers");
      return;
    }
    switch (op) {
      case "+":
        setResult(a + b);
        break;
      case "-":
        setResult(a - b);
        break;
      case "*":
        setResult(a * b);
        break;
      case "/":
        setResult(b !== 0 ? a / b : "Cannot divide by 0");
        break;
      default:
        setResult(null);
    }
  };

const dynamicStyle = {
  backgroundColor: count > 10 ? "red" : "black",
  color: count > 10 ? "black" : "red",
  width: "100vw",
  height: "100vh",
  margin: 0,
  padding: "20px",

};


  return (
    <div style={dynamicStyle}>
      <div className="App">
        <h2>Clicked Counts: {count}</h2>
        <button onClick={() => setCount(count + 1)}>Increment</button>
        <button onClick={() => setCount(count - 1)}>Decrement</button>
        <button onClick={() => setCount(0)}>Reset</button>
      </div>

      <div className="container">
        <h1>Simple Calculator</h1>
        <input
          type="number"
          value={num1}
          onChange={(e) => setNum1(e.target.value)}
          placeholder="Enter first number"
        />
        <input
          type="number"
          value={num2}
          onChange={(e) => setNum2(e.target.value)}
          placeholder="Enter second number"
        />
        <div className="btn-group" style={{ marginTop: "10px" }}>
          <button onClick={() => calculate("+")}>+</button>
          <button onClick={() => calculate("-")}>-</button>
          <button onClick={() => calculate("*")}>*</button>
          <button onClick={() => calculate("/")}>/</button>
        </div>
        {result !== null && (
          <h2 style={{ marginTop: "15px" }}>Result: {result}</h2>
        )}
      </div>
    </div>
  );
}

export default App;

/*import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
   const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [result, setResult] = useState(null);

   const calculate = (op) => {
    const a = parseFloat(num1);
    const b = parseFloat(num2);
    if (isNaN(a) || isNaN(b)) {
      setResult("Enter valid numbers");
      return;
    }
    switch (op) {
      case "+":
        setResult(a + b);
        break;
      case "-":
        setResult(a - b);
        break;
      case "*":
        setResult(a * b);
        break;
      case "/":
        setResult(b !== 0 ? a / b : "Cannot divide by 0");
        break;
      default:
        setResult(null);
    }
  };


  return (
    <>
      <div className="App">
        <h2>Clicked Counts: {count}</h2>
        <button onClick={() => setCount(count + 1)}>Increment</button>
        <button onClick={() => setCount(count - 1)}>Decrement</button>
        <button onClick={() => setCount(0)}>Reset</button>
      </div>

      <div className="container">
        <h1>Simple Calculator</h1>
        <input
          type="number"
          value={num1}
          onChange={(e) => setNum1(e.target.value)}
          placeholder="Enter first number"
        />
        <input
          type="number"
          value={num2}
          onChange={(e) => setNum2(e.target.value)}
          placeholder="Enter second number"
        />
        <div className="btn-group" style={{ marginTop: "10px" }}>
          <button onClick={() => calculate("+")}>+</button>
          <button onClick={() => calculate("-")}>-</button>
          <button onClick={() => calculate("*")}>*</button>
          <button onClick={() => calculate("/")}>/</button>
        </div>
        {result !== null && (
          <h2 style={{ marginTop: "15px" }}>Result: {result}</h2>
        )}
      </div>
    </>
  );
}
  

export default App
*/


/*import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  // Task adder states
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);
  const [serial, setSerial] = useState(0);

  // Calculator states
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [result, setResult] = useState(null);

  // Task Adder functions
  const addTask = () => {
    if (task.trim() !== "") {
      setSerial(serial + 1);
      setTasks([
        ...tasks,
        { id: serial + 1, text: task, completed: false },
      ]);
      setTask("");
    }
  };

  const toggleComplete = (id) => {
    setTasks(
      tasks.map((t) =>
        t.id === id ? { ...t, completed: !t.completed } : t
      )
    );
  };

  const removeTask = (id) => {
    setTasks(tasks.filter((t) => t.id !== id));
  };

  // Calculator functions
  const calculate = (op) => {
    const a = parseFloat(num1);
    const b = parseFloat(num2);
    if (isNaN(a) || isNaN(b)) {
      setResult("Enter valid numbers");
      return;
    }
    switch (op) {
      case "+":
        setResult(a + b);
        break;
      case "-":
        setResult(a - b);
        break;
      case "*":
        setResult(a * b);
        break;
      case "/":
        setResult(b !== 0 ? a / b : "Cannot divide by 0");
        break;
      default:
        setResult(null);
    }
  };

  return (
    <>
      
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
<h1>
  <span className="vite-text">Vite</span> +{" "}
  <span className="react-text">React</span>
</h1>




      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>

      
      <div className="container">
        <h1>TO DO LIST</h1>
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Enter a task"
          id="myInput"
        />
        <button id="add" onClick={addTask}>
          Add Task
        </button>

        <h2>These are your tasks to complete:</h2>
        <ul id="list">
          {tasks.map((t) => (
            <li
              key={t.id}
              className={t.completed ? "completed" : ""}
            >
              <span className="task-text">
                {t.id}. {t.text}
              </span>
              <div className="btn-group">
                <button
                  className="complete-btn"
                  onClick={() => toggleComplete(t.id)}
                >
                  {t.completed ? "Completed" : "Complete"}
                </button>
                <button
                  className="remove-btn"
                  onClick={() => removeTask(t.id)}
                >
                  Remove
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>

     
      <div className="container">
        <h1>Simple Calculator</h1>
        <input
          type="number"
          value={num1}
          onChange={(e) => setNum1(e.target.value)}
          placeholder="Enter first number"
        />
        <input
          type="number"
          value={num2}
          onChange={(e) => setNum2(e.target.value)}
          placeholder="Enter second number"
        />
        <div className="btn-group" style={{ marginTop: "10px" }}>
          <button onClick={() => calculate("+")}>+</button>
          <button onClick={() => calculate("-")}>-</button>
          <button onClick={() => calculate("*")}>*</button>
          <button onClick={() => calculate("/")}>/</button>
        </div>
        {result !== null && (
          <h2 style={{ marginTop: "15px" }}>Result: {result}</h2>
        )}
      </div>
    </>
  );
}

export default App;
*/
