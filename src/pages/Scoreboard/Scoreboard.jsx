import PlayerSection from '../../components/PlayerSection/PlayerSection';
import ScoreboardLayout from '../../components/ScoreboardLayout/ScoreboardLayout';

import flag from "../../assets/flag-japan.webp"
import flag_netherlands from "../../assets/dutch_flag.png"
import Timer from '../../components/Timer/Timer'
import { useParams } from 'react-router';
import { useEffect, useState } from 'react';
import axios from 'axios';

function Scoreboard() {
  const id = useParams().id;
  const [match, setMatch] = useState({})
  useEffect(() => {
    axios.get(`http://localhost:8080/${id}`).then(res => {
      setMatch(res.data)
      console.log(res.data)
    }).catch(err => {
      console.log(err)
    })
  }, [])
    return (
      <ScoreboardLayout>
        <PlayerSection name={match.player_white} country = {match.country_white} flag = {flag} club= {match.club_white} ippon = {0} wazari={0} shido = {0}/>
        <PlayerSection name={match.player_blue} country = {match.country_blue} flag = {flag} club= {match.club_blue}  ippon = {0} wazari={1} shido = {0}/>
        <Timer round = {1} weight={match.weight} osaekomiColor="none" osaekomiTime={"00"}></Timer>
      </ScoreboardLayout>
    );
  }
  
  export default Scoreboard;