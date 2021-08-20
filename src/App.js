import "./App.css";

function App() {
  return (
    <div className="App">
      <p>
        <strong>Task Description:</strong>
      </p>
      <ul>
        <li>
          Use the New counter form to add multiple counters with + and -
          buttons. <br />
          They will increase/decrease the counter.
        </li>
        <li>Calculate the total number of counters</li>
      </ul>
      <h1>Counter</h1>
      <h3>Total: 12</h3>
      {/* Add new counters here */}
      <p>
        Cats: 7 <button>+</button>&nbsp;
        <button>-</button>
      </p>
      <p>
        Dogs: 5 <button>+</button>&nbsp;
        <button>-</button>
      </p>
      <p>
        New counter: <input type="text" /> <button type="button">Add</button>
      </p>
    </div>
  );
}

export default App;
