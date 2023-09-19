import PlayerSection from '../../components/PlayerSection/PlayerSection';
import ScoreboardLayout from '../../components/ScoreboardLayout/ScoreboardLayout';

import flag from "../../assets/flag-japan.webp"
import flag_netherlands from "../../assets/dutch_flag.png"
import Timer from '../../components/Timer/Timer'
import { useParams } from 'react-router';
import { useEffect, useState, useRef } from 'react';
import axios from 'axios';

function Scoreboard() {
  const id = useParams().id;
  const [match, setMatch] = useState({})
  const [startTime,] = useState(new Date().getTime())
  const [time, setTime] = useState(0)
  const osaekomiClockBlue = useRef(0)
  const osaekomiClockWhite = useRef(0)
  useEffect(() => {
    
    axios.get(`${process.env.REACT_APP_API_URL}/${id}`).then(res => {
      setMatch(res.data)
      const mainclock = setInterval(() => {
        setTime(new Date().getTime())
        if(res.data.osaekomi === 0){
          osaekomiClockBlue.current = 0
          osaekomiClockWhite.current = 0
        }else if(res.data.osaekomi === 1){
          osaekomiClockWhite.current = osaekomiClockWhite.current+1
        }else if(res.data.osaekomi === 2){
          osaekomiClockBlue.current = osaekomiClockBlue.current+1
        }
      }, 1000)
      
      return () => {
        clearInterval(mainclock)
      }
    }).catch(err => {
      console.log(err)
    })
  }, [id,match])

  if(!match)
    return (<>Loading...</>)
  return (
      <ScoreboardLayout>
        <PlayerSection name={match.player_white} country = {match.country_white} flag = {flag} club= {match.club_white} ippon = {match.whiteIppon} wazari={match.whiteWazari} shido = {match.whiteShido}/>
        <PlayerSection name={match.player_blue} country = {match.country_blue} flag = {flag_netherlands} club= {match.club_blue}  ippon = {match.blueIppon} wazari={match.blueWazari} shido = {match.blueShido}/>
        <Timer round = {1} weight={match.weight} time = {`${`${10-Math.floor((time-startTime)/1000/60)}`.padStart(2,"0")}:${`${60-Math.floor((time-startTime)/1000)%60}`.padStart(2,"0")}`} osaekomiColor={match.osaekomi === 0 ? 'none':match.osaekomi === 1 ? 'white':'blue'} osaekomiTime={match.osaekomi === 0 ? '00':match.osaekomi === 1 ? osaekomiClockWhite.current:osaekomiClockBlue.current}></Timer>
      </ScoreboardLayout>
    );
  }
  
  export default Scoreboard;