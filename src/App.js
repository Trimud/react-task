import "./App.css";

import TaskHeader from "./components/TaskHeader";
import CounterContainer from "./components/CounterContainer";

function App() {
  return (
    <div className="App">
      <TaskHeader />
      <h1>Counter</h1>
      <CounterContainer />
    </div>
  );
}

export default App;
