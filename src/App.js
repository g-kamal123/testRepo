import logo from "./logo.svg";
import "./App.css";

function App() {
  const handler = (event) => {
    console.log(event.target.files[0]);
    if (event.target.files && event.target.files[0]) {
      let img = event.target.files[0];
      console.log(URL.createObjectURL(img));
    }
  };
  console.log("userName");
  return (
    <div className="App">
      <header className="App-header">
        <input type="file" onChange={handler} />
      </header>
    </div>
  );
}

export default App;
