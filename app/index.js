import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'

function getDifference(betweenThis, andThis = new Date()) {
  let ms = new Date(betweenThis).valueOf() - new Date(andThis).valueOf();

  ms += 999;

  const totalMinutes = Math.floor((ms + 59000) / 1000 / 60);
  const isNegative = ms < 0;

  if (isNegative) ms -= 1000;

  ms = Math.abs(ms);
  const days = Math.floor(ms / 1000 / 60 / 60 / 24);
  const hours = Math.floor((ms / 1000 / 60 / 60) % 24);
  const minutes = Math.floor((ms / 1000 / 60) % 60);
  const seconds = Math.floor((ms / 1000) % 60);
  let str = '';

  if (days > 0) str = `${days}d ${hours}h`;

  else if (hours > 0) str = `${hours}h ${minutes}m`;

  else if (minutes > 0) str = `${minutes}m ${seconds}s`;

  else str = `${seconds}s`;

  if (isNegative) {
    str = `-${str}`;
  }

  return str;
};

function useFetch(url) {
  const [data, setData] = React.useState(null);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    setLoading(true);
    fetch(url)
      .then(result => {
        return result.json();
      })
      .then(data => {
        setData(data);
        setLoading(false);
      })
      .catch(error => {
        setError(error);
      });
  }, [url]);

  return {
    loading,
    data,
    error
  };
}

function NextToJumpTile(props) {
  return(
    <div className="NextToJump__raceEvent--bfMON webroi">
      <a
        className="Link__link--9x4YY"
        href={props.link}
      >
        <div className="NextToJump__eventDetail--CUzdX">
          <div className="NextToJump__venue--1jwWA">{props.venue}</div>
          <div className="NextToJump__race--3JydR"><span>Race {props.number}</span></div>
        </div>
        <div className="NextToJump__countdown--EG8mR">
          <span className="Countdown__countdown--4vRpD Countdown__imminent--2yc2K" >{getDifference(props.time)}</span>
        </div>
      </a>
    </div>
  )
}

function NextToJump() {
  const [data, setData] = React.useState(null);

  const { loading, data: race, error } = useFetch(
    `https://beteasy.com.au/api/home/next-jumps/1`
  );

  if (loading === true) {
    return <p>Loading</p>;
  }

  if (error) {
    return (
      <React.Fragment>
        <p>{error}</p>
      </React.Fragment>
    );
  }

  return (
    <React.Fragment> 
      <div className="NextToJump__raceEventWrapper">
        {race.result.map(race => (
          <NextToJumpTile
            key={race.EventName}
            link={`/racing-betting/${race.EventType.Slug}/${race.Venue.Slug}/${race.DateSlug}/race-${race.RaceNumber}-${race.MasterEventID}-${race.EventID}`}
            venue={race.Venue.Venue}
            number={race.RaceNumber}
            time={race.AdvertisedStartTime}
          />
        ))}
      </div>
    </React.Fragment>
  )
}

setTimeout(() => {
  const ref = document.querySelector('.NavBar__navBar--3EpJD');
  ref.insertAdjacentHTML('afterend', '<div class="NextToJump__eventWrapper--13zZJ webroi"><div></div></div>')
  ReactDOM.render (
    <NextToJump />,
    document.querySelector('.NextToJump__eventWrapper--13zZJ.webroi')
  )
}, 500)