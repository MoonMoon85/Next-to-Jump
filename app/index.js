import React from 'react'
import ReactDOM from 'react-dom'
import styled from 'styled-components';
import { useFetch } from './utils/api'
import { Tile } from './components/Tile'
import { Loader } from './components/Loader'
import { Nav } from './components/Nav'
import './index.css'

const NextToJumpWrapper = styled.div`
  flex-direction: row;
  display: flex;
  background: #fff;
  border-radius: 0 0 4px 0;
  justify-content: flex-start;
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

const NextToJumpEventWrapper = styled.div`
  flex-direction: row;
  display: flex;
  justify-content: space-evenly;
  width: 100%;
`

const Header = styled.div`
  width: 120px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  min-width: 120px;
  background-color: #652f9c;
  border-radius: 0 0 0 4px;
  color: #fff;
  padding: 12px 14px;
`

function NextToJump() {
  const [data, setData] = React.useState(null);
  const [type, setType] = React.useState('1,2,3');

  const { loading, data: race, error } = useFetch(
    `https://beteasy.com.au/api/home/next-jumps/${type}`
  );

  const updateRaceType = type => {
    setType(type);
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
      <Header>Next To Jump</Header>
      <Nav onUpdateRaceType={updateRaceType}></Nav>
      <NextToJumpEventWrapper>
        {loading && <Loader></Loader>}
        {!loading && race.result.map(race => (
          <Tile
            key={race.EventName}
            link={`/racing-betting/${race.EventType.Slug}/${race.Venue.Slug}/${race.DateSlug}/race-${race.RaceNumber}-${race.MasterEventID}-${race.EventID}`}
            icon={race.EventType.EventTypeDesc}
            venue={race.Venue.Venue}
            number={race.RaceNumber}
            time={race.AdvertisedStartTime}
          />
        ))}
      </NextToJumpEventWrapper>
    </NextToJumpWrapper>
  )
}

ReactDOM.render (
  <NextToJump />,
  document.querySelector('.webroi')
)