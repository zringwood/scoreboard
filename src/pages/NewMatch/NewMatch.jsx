import axios from "axios";
import "./NewMatch.scss"
import { useNavigate } from "react-router";
function NewMatch() {
    const navigate = useNavigate();
    const submitForm = (evt) => {
        evt.preventDefault()
        const game = {
                player_blue: evt.target.form.blueName.value,
                club_blue: evt.target.form.blueClub.value,
                country_blue: evt.target.form.blueCountry.value,
                player_white: evt.target.form.whiteName.value,
                club_white: evt.target.form.whiteClub.value,
                country_white: evt.target.form.whiteCountry.value,
                weight: evt.target.form.weight.value
        }
        axios.post("http://localhost:8080", game).then(res => {
            navigate(`/display/${res.data}`)
        }).catch(err => {
            console.log(err)
        })
    }
    return (
      <form className="matchForm">
        <div className="matchForm__layout">
        <section className="playerSection">
            <h1>White Player</h1>
            <label htmlFor="whiteName">Name:</label>
            <input type="text" id="whiteName" name="whiteName"/>
            <label htmlFor="whiteClub">Club:</label>
            <input type="text" id="whiteClub" name="whiteClub"/>
            <label htmlFor="whiteCountry">Country:</label>
            <input type="text" id="whiteCountry" name="whiteCountry"/>
        </section>
        <section className="playerSection">
            <h1>Blue Player</h1>
            <label htmlFor="blueName">Name:</label>
            <input type="text" id="blueName" name="blueName"/>
            <label htmlFor="blueClub">Club:</label>
            <input type="text" id="blueClub" name="blueClub"/>
            <label htmlFor="blueCountry">Country:</label>
            <input type="text" id="blueCountry" name="blueCountry"/>
        </section>
        </div>
        <label htmlFor="weight">Weight:</label>
        <input type="text" id="weight" name="weight"/>
        <button type="submit" className="matchForm__submit" onClick={(evt) => submitForm(evt)}>Submit</button>
      </form>
    );
  }
  
  export default NewMatch;