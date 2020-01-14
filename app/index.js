import React from 'react'
import ReactDOM from 'react-dom'
import styled from 'styled-components';
import { useFetch } from './utils/api'
import { Tile } from './components/Tile'
import './index.css'

const NextToJumpWrapper = styled.div`
  flex-direction: row;
  display: flex;
  justify-content: space-evenly;
  width: 100%;
  left: 0;
  position: absolute;
  right: 0;
  top: 126px;
  z-index: 1000;
  margin: 0 auto;
  max-width: 1320px;
  padding-left: 10px;
`;

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
    <NextToJumpWrapper>
      {race.result.map(race => (
        <Tile
          key={race.EventName}
          link={`/racing-betting/${race.EventType.Slug}/${race.Venue.Slug}/${race.DateSlug}/race-${race.RaceNumber}-${race.MasterEventID}-${race.EventID}`}
          venue={race.Venue.Venue}
          number={race.RaceNumber}
          time={race.AdvertisedStartTime}
        />
      ))}
    </NextToJumpWrapper>
  )
}

setTimeout(() => {
  const ref = document.querySelector('.NavBar__navBar--3EpJD');
  ref.insertAdjacentHTML('afterend', '<div class="webroi"></div>')
  ReactDOM.render (
    <NextToJump />,
    document.querySelector('.webroi')
  )
}, 500)