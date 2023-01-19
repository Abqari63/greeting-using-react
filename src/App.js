import './App.css';
import Welcome from './components/Welcome';
import { useState } from 'react';

function App() {
  const [name, setname] = useState("");

  const handleClick = () => {
    setname(document.getElementById("name").value);
    document.getElementById("greet-msg").style.display = "block";
  }

  return (
    <div className="App greet-body">
      Enter your name: <input id="name" type="text" placeholder="Enter your name" />
      <button className="login-btn" onClick={handleClick}>Login</button>
      <Welcome name={name} reg="12014678" />
    </div>
  );
}

export default App;
