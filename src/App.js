import "./App.css";

import TaskHeader from "./components/TaskHeader";
import CounterForm from "./components/CounterForm";
import CounterTotal from "./components/CounterTotal";
import CountersDisplay from "./components/CountersDisplay";

function App() {
  return (
    <div className="App">
      <TaskHeader />
      <h1>Counter</h1>
      <CounterTotal />
      {/* Start example here */}
      <CountersDisplay />
      {/* End example here */}
      <CounterForm />
    </div>
  );
}

export default App;
