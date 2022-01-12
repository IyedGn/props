import logo from "./logo.svg";
import "./App.css";
import Profile from "./Profile/Profile";

function App() {
  function getData() {
    alert("hello world");
  }
  const name = "iyed";
  const age = "19";
  const profession = "student";

  return (
    <div className="App">
      <Profile name={name} age={age} profession={profession} Data={getData} />
    </div>
  );
}

export default App;
