import './App.css';
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar';
function App() {
  return (
    <div className="App">
      <div className="nav">
        <Navbar />
      </div>
      <div className="sideComp">
        <Sidebar />
      </div>
    </div>
  );
}

export default App;
