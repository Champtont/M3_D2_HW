import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MyNav from "./Components/MyNav";
import MyFooter from "./Components/MyFooter";
import Welcome from "./Components/Welcome";

function App() {
  return (
    <div className="App">
      <MyNav />
      <Welcome />
      <MyFooter />
    </div>
  );
}

export default App;
