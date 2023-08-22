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
  const [startTime,] = useState(new Date().getTime())
  const [time, setTime] = useState(0)
 

  useEffect(() => {
    axios.get(`http://localhost:8080/${id}`).then(res => {
      setMatch(res.data)
    }).catch(err => {
      console.log(err)
    })
    const interval = setInterval(() => {
      setTime(new Date().getTime())
    }, 1000)
    return () => clearInterval(interval)
  }, [id, time])

  if(!match)
    return (<>Loading...</>)
  return (
      <ScoreboardLayout>
        <PlayerSection name={match.player_white} country = {match.country_white} flag = {flag} club= {match.club_white} ippon = {match.whiteIppon} wazari={match.whiteWazari} shido = {match.whiteShido}/>
        <PlayerSection name={match.player_blue} country = {match.country_blue} flag = {flag_netherlands} club= {match.club_blue}  ippon = {match.blueIppon} wazari={match.blueWazari} shido = {match.blueShido}/>
        <Timer round = {1} weight={match.weight} time = {`${`${10-Math.floor((time-startTime)/1000/60)}`.padStart(2,"0")}:${`${60-Math.floor((time-startTime)/1000)%60}`.padStart(2,"0")}`} osaekomiColor="none" osaekomiTime={"00"}></Timer>
      </ScoreboardLayout>
    );
  }
  
  export default Scoreboard;