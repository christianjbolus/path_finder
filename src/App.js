import './App.css';
import Grid from './components/Grid/Grid';
import Button from './components/Button/Button'

function App() {
  return (
    <div className="App">
      <h1>Path Finder</h1>
      <Grid />
      <Button text="Execute" className="btn"/>
    </div>
  );
}

export default App;
