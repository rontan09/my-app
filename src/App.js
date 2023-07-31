import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Navbar from './components/Navbar/Navbar';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      {/* <Stack direction="row" spacing={2}>
        <Button
          variant="text"
          onClick={() => { console.log('clicked') }}
        >
          Text
        </Button>
        <Button variant="contained">Contained</Button>
        <Button variant="outlined">Outlined</Button>
      </Stack> */}
    </div>
  );
}

export default App;
