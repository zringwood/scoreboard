import './App.css';
import PlayerSection from './components/PlayerSection/PlayerSection';
import ScoreboardLayout from './components/ScoreboardLayout/ScoreboardLayout';
import flag from "./assets/flag-japan.webp"
function App() {
  return (
      <PlayerSection name="Hifume ABE" country = "JPN" flag = {flag} club= "TOKAI UNIVERSITY" ippon = {0} wazari={0} shido = {2}/>
  );
}

export default App;
