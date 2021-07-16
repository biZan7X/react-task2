import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Todays date and time</h1>
      <h2>{new Date().getDate()}th July</h2>
      <h2>{new Date().toLocaleTimeString()}</h2>
    </div>
  );
}

export default App;
