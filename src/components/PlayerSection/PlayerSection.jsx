import './PlayerSection.scss';
import shido_one from '../../assets/shido_one.svg'
import shido_two from "../../assets/shido_two.svg"
import shido_three from "../../assets/shido_three.svg"
function PlayerSection({name, country,flag, club, ippon, wazari, shido}) {

    let shido_svg = shido_one
    if(shido === 2){
        shido_svg = shido_two
    }
    if(shido === 3){
        shido_svg = shido_three
    }
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
        {shido === 0 ? <span className='player__shido'>s</span> : <img className='player__shido'src = {shido_svg} alt = "shidos"/>}
        <div className='player__blank'></div>
        </div>
        </div>
    </section>
  );
}

export default PlayerSection;
