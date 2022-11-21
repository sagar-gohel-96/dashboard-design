import './App.css';
import Dashboard from './components/Dashboard';
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar';
function App() {
  return (
    <div className="App">
      <div className="nav">
        <Navbar />
      </div>
      <div className="sideComp">
        <div>
          <Sidebar />
        </div>
        <div>
          <Dashboard />
        </div>
      </div>
    </div>
  );
}

export default App;
