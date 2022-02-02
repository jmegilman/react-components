import { Link, Outlet } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>React Playground</h1>
        <nav>
          <Link to="/home" style={{ display: "inline-block", margin: "0 0 0 1rem" }}>Home</Link>
          <Link to="/tabs" style={{ display: "inline-block", margin: "0 0 0 1rem" }}>Tabs</Link>
          <Link to="/invoices" style={{ display: "inline-block", margin: "0 0 0 1rem" }}>Invoices</Link>
        </nav>
        <Outlet />
      </header>
    </div>
  );
}

export default App;
