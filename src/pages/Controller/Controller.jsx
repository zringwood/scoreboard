import { useEffect, useState } from "react";
import "./Controller.scss";
import { useParams } from "react-router";
import axios from "axios";
function Controller() {
    const [osaekomi, setOsaekomi] = useState(0)
    const [whiteIppon, setWhiteIppon] = useState(0 )
    const [blueIppon, setBlueIppon] = useState(0)
    const [whiteWazari, setWhiteWazari] = useState(0)
    const [blueWazari, setBlueWazari] = useState(0)
    const [whiteShido, setWhiteShido] = useState(0)
    const [blueShido, setBlueShido] = useState(0)
    const id = useParams().id;
    //Every time the state variable changes, we send a put request to the server to update the value.
    
    useEffect(() => {
        axios.put(`http://localhost:8080/${id}`, {
            "osaekomi":osaekomi,
            "whiteIppon":whiteIppon,
            "blueIppon":blueIppon,
            "whiteWazari":whiteWazari,
            "blueWazari":blueWazari,
            "whiteShido":whiteShido,
            "blueShido":blueShido
        }).then(res => {
            console.log(res.data)
        }).catch(err => {
            console.log(err)
        })
    })
    

    return (
        <form className="controllerForm">
        <div className="matchForm__layout">
        <section className="playerSection">
            <h1>White Player</h1>
            <div className="flex-input">
            <label htmlFor="whiteOsaekomi">Osaekomi:</label>
            <input type="radio" id="whiteOsaekomi" name="osaekomi" value = "white" checked={osaekomi===1} onClick={() => 
            {
                setOsaekomi(osaekomi === 1 ? 0 : 1)
            }}/>
            </div>
            <div className="flex-input">
            <label htmlFor="whiteIppon">Ippon:</label>
            <input type="checkbox" id="whiteIppon" name="whiteIppon" onChange={(evt) => {
                setWhiteIppon(evt.target.value ? 1:0)
            }}/>
            </div>
            <label htmlFor="whiteWazari">Wazari:</label>
            <div className="flex-radio">
            <label htmlFor="whiteWazari--zero">0:</label>
            <input type="radio" id="whiteWazari--zero" name="whiteWazari" value = "0" defaultChecked onChange={(evt) => {
                setWhiteWazari(evt.target.value)
            }}/>
            <label htmlFor="whiteWazari--one">1:</label>
            <input type="radio" id="whiteWazari--one" name="whiteWazari" value = "1" onChange={(evt) => {
                setWhiteWazari(evt.target.value)
            }}/>
            <label htmlFor="whiteWazari--two">2:</label>
            <input type="radio" id="whiteWazari--two" name="whiteWazari" value = "2" onChange={(evt) => {
                setWhiteWazari(evt.target.value)
            }}/>
            </div>
            <label htmlFor="whiteShido">Shido:</label>
            <div className="flex-radio">
            <label htmlFor="whiteShido--zero">0:</label>
            <input type="radio" id="whiteShido--zero" name="whiteShido" value = "0" defaultChecked onChange={(evt) => {
                setWhiteShido(evt.target.value)
            }}/>
            <label htmlFor="whiteShido--one">1:</label>
            <input type="radio" id="whiteShido--one" name="whiteShido" value = "1"onChange={(evt) => {
                setWhiteShido(evt.target.value)
            }}/>
            <label htmlFor="whiteShido--two">2:</label>
            <input type="radio" id="whiteShido--two" name="whiteShido" value = "2"onChange={(evt) => {
                setWhiteShido(evt.target.value)
            }}/>
            <label htmlFor="whiteShido--three">3:</label>
            <input type="radio" id="whiteShido--three" name="whiteShido" value = "3"onChange={(evt) => {
                setWhiteShido(evt.target.value)
            }}/>
            <label htmlFor="whiteShido--four">4:</label>
            <input type="radio" id="whiteShido--four" name="whiteShido" value = "4"onChange={(evt) => {
                setWhiteShido(evt.target.value)
            }}/>
            </div>
            
        </section>
        <section className="playerSection">
            <h1>Blue Player</h1>
            <div className="flex-input">
            <label htmlFor="blueOsaekomi">Osaekomi:</label>
            <input type="radio" id="blueOsaekomi" name="osaekomi" value = "blue" checked={osaekomi===2} onClick={() => 
            {
                setOsaekomi(osaekomi === 2 ? 0 : 2)
            }}/>
            </div>
            <div className="flex-input">
            <label htmlFor="blueIppon">Ippon:</label>
            <input type="checkbox" id="blueIppon" name="blueIppon" onChange={(evt) => {
                setBlueIppon(evt.target.value ? 1:0)
            }}/>
            </div>
            <label htmlFor="blueWazari">Wazari:</label>
            <div className="flex-radio">
            <label htmlFor="blueWazari--zero">0:</label>
            <input type="radio" id="blueWazari--zero" name="blueWazari" value = "0"  defaultChecked onChange={(evt) => {
                setBlueWazari(evt.target.value)
            }}/>
            <label htmlFor="blueWazari--one">1:</label>
            <input type="radio" id="blueWazari--one" name="blueWazari" value = "1" onChange={(evt) => {
                setBlueWazari(evt.target.value)
            }}/>
            <label htmlFor="blueWazari--two">2:</label>
            <input type="radio" id="blueWazari--two" name="blueWazari" value = "2" onChange={(evt) => {
                setBlueWazari(evt.target.value)
            }}/>
            </div>
            <label htmlFor="blueShido">Shido:</label>
            <div className="flex-radio">
            <label htmlFor="blueShido--zero">0:</label>
            <input type="radio" id="blueShido--zero" name="blueShido" value = "0"  defaultChecked onChange={(evt) => {
                setBlueShido(evt.target.value)
            }}/>
            <label htmlFor="blueShido--one">1:</label>
            <input type="radio" id="blueShido--one" name="blueShido" value = "1"onChange={(evt) => {
                setBlueShido(evt.target.value)
            }}/>
            <label htmlFor="blueShido--two">2:</label>
            <input type="radio" id="blueShido--two" name="blueShido" value = "2"onChange={(evt) => {
                setBlueShido(evt.target.value)
            }}/>
            <label htmlFor="blueShido--three">3:</label>
            <input type="radio" id="blueShido--three" name="blueShido" value = "3"onChange={(evt) => {
                setBlueShido(evt.target.value)
            }}/>
            <label htmlFor="blueShido--four">4:</label>
            <input type="radio" id="blueShido--four" name="blueShido" value = "4"onChange={(evt) => {
                setBlueShido(evt.target.value)
            }}/>
            </div>
        </section>
        </div>
      </form>
    );
  }
  
  export default Controller;