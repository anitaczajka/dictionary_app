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
        <Dictionary defaultKeyword="hello" />
        <footer className="App-footer mt-4">
          This app was coded by Anita Czajka and is{" "}
          <a
            href="https://github.com/anitaczajka/dictionary_app"
            target="_blank"
            rel="noreferrer"
          >
            open-sourced on Github
          </a>
        </footer>
      </div>
    </div>
  );
}
