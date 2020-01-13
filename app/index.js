import React from 'react'
import ReactDOM from 'react-dom'
import { useFetch } from './utils/api'
import { Tile } from './components/Tile'
import './index.css'

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
          <Tile
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