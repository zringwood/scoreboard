import "./NewMatch.scss"

function NewMatch() {
    const submitForm = (evt) => {
        evt.preventDefault()
    }
    return (
      <form className="matchForm">
        <div className="matchForm__layout">
        <section className="playerSection">
            <h1>White Player</h1>
            <label htmlFor="whiteName">Name:</label>
            <input type="text" id="whiteName"/>
            <label htmlFor="whiteClub">Club:</label>
            <input type="text" id="whiteClub"/>
            <label htmlFor="whiteCountry">Country:</label>
            <input type="text" id="whiteCountry"/>
        </section>
        <section className="playerSection">
            <h1>Blue Player</h1>
            <label htmlFor="blueName">Name:</label>
            <input type="text" id="blueName"/>
            <label htmlFor="blueClub">Club:</label>
            <input type="text" id="blueClub"/>
            <label htmlFor="blueCountry">Country:</label>
            <input type="text" id="blueCountry"/>
        </section>
        </div>
        <button type="submit" className="matchForm__submit" onClick={(evt) => submitForm(evt)}>Submit</button>
      </form>
    );
  }
  
  export default NewMatch;