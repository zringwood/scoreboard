import './App.css';
import PlayerSection from './components/PlayerSection/PlayerSection';
import ScoreboardLayout from './components/ScoreboardLayout/ScoreboardLayout';
import flag from "./assets/flag-japan.webp"
function App() {
  return (
      <PlayerSection name="Hifume Abe" country = "JPN" club= "TOKAI" ippon = {0} wazari={0} shido = {0}/>
  );
}

export default App;
