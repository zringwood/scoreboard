import './PlayerSection.scss';

function PlayerSection({name, country, club, ippon, wazari, shido}) {
  return (
    <section className='player'>
        <img className='player__country' src = "" alt = {country} />
        <p className='player__club'>{club}</p>
        <h1 className='player__name'>{name}</h1>
        <p className="player__ippon">{ippon}</p>
        <p className='player__wazari'>{wazari}</p>
        <img className='player__shido' src = "" alt = "s"/>
    </section>
  );
}

export default PlayerSection;
