import "./App.css";
import TextField from "@material-ui/core/TextField";

function App() {
  return (
    <div className="App" id="maindiv">
      <div>
        <h1>🎯🎯SlimGuy ToDo App with React😎😎 </h1>
      </div>
      <div id="todoArea">
        <TextField
          id="standard-basic"
          label="Write your ToDo here..."
          variant="standard"
        />
      </div>
    </div>
  );
}

export default App;
