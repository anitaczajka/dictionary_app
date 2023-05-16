import "./App.css";
import logo from "./images/logo.png";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img src={logo} className="App-logo img-fluid" alt="logo" />
        </header>
        <Dictionary />
        <footer className="App-footer mt-4">Coded by Anita Czajka</footer>
      </div>
    </div>
  );
}
