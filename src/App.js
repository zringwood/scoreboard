import './App.css';
import PlayerSection from './components/PlayerSection/PlayerSection';
import ScoreboardLayout from './components/ScoreboardLayout/ScoreboardLayout';
import flag from "./assets/flag-japan.webp"
import flag_netherlands from "./assets/dutch_flag.png"
function App() {
  return (
    <ScoreboardLayout>
      <PlayerSection name="Hifume ABE" country = "JPN" flag = {flag} club= "TOKAI UNIVERSITY OF JAPAN VAERY BIG NICE CLUB" ippon = {0} wazari={0} shido = {0}/>
      <PlayerSection name="Mark HUIZINGA" country = "NDL" flag = {flag_netherlands} club= "HOLLAND JUDO CLUB" ippon = {0} wazari={1} shido = {0}/>
    </ScoreboardLayout>
  );
}

export default App;
