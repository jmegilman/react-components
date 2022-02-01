import { Link, Outlet } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <nav>
          <Link to="/home" style={{ display: "inline-block", margin: "0 0 0 1rem" }}>Home</Link>
          <Link to="/about" style={{ display: "inline-block", margin: "0 0 0 1rem" }}>About</Link>
          <Link to="/invoices" style={{ display: "inline-block", margin: "0 0 0 1rem" }}>Invoices</Link>
        </nav>
        <Outlet />
      </header>
    </div>
  );
}

export default App;
