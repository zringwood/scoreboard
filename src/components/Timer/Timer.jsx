import "./Timer.scss"

function Timer({round, weight, time, osaekomiColor, osaekomiTime}){
    return (
        <section className="timer">
            <div className="timer__matchinfo">
            <h3 className="timer__text">{`Round ${round}`}</h3>
            <span className="timer__text">{weight}</span>
            </div>
            <time className="timer__roundtimer">{time}</time>
            <div className="osaekomi">
                <span className="osaekomi__color">?</span>
                <span className="osaekomi__color">?</span>
            </div>
            <time className="timer__osaekomiTimer">{osaekomiTime}</time>
        </section>
    )
}


export default Timer;