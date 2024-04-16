import { Button, TextField } from "@mui/material";
import "./App.scss";
function App() {
  return (
    <div className="app flexCenterColumn">
      <div className="container">
        <h1>Downlaoder</h1>
        <Button variant="contained" color="error">
          Contained
        </Button>

        <TextField variant="outlined"/>
      </div>
    </div>
  );
}

export default App;
