import './PlayerSection.scss';

function PlayerSection({name, country,flag, club, ippon, wazari, shido}) {
  return (
    <section className='player'>
        <div className='player__origin'>
            <img className='player__flag' src = {flag} alt = {country} />
            <span className='player__club'>{club}</span>
        </div>
        <div className='player__right'>
        <h1 className='player__title'>{`${name}, ${country}/${club}`}</h1>
        <div className='player__scores'>
        <p className="player__scorecount">{ippon}</p>
        <p className='player__scorecount'>{wazari}</p>
        <img className='player__shido' src = "" alt = "s"/>
        </div>
        </div>
    </section>
  );
}

export default PlayerSection;
