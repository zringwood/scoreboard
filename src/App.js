import './App.css';
import PlayerSection from './components/PlayerSection/PlayerSection';
import ScoreboardLayout from './components/ScoreboardLayout/ScoreboardLayout';

function App() {
  return (
    <ScoreboardLayout>
      <PlayerSection name="Hifume Abe" country = "JPN" club= "TOKAI" ippon = {0} wazari={0} shido = {0}/>

    </ScoreboardLayout>
  );
}

export default App;
