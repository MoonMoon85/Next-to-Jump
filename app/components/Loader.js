import React from 'react'
import styled from 'styled-components';

const RaceEvent = styled.div`
  border-right: 1px solid #ebedf5;
  background: #fff;
  line-height: 1.4;
  font-size: 12px;
  font-weight: 400;
  width: 188px;
  display: flex;
  align-items: center;
  flex: 1;
  justify-content: flex-start;
  padding: 10px;
`;

const RaceEventIcon = styled.div`
  background: #afafaf;
  opacity: .2;
  width: 32px;
  height: 32px
`;

const RaceEventDetail = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 5px;
`;

const RaceEventVenue = styled.div`
  background: #afafaf;
  opacity: .2;
  width: 80px;
  height: 13px;
  margin-bottom: 3px;
`;

const RaceEventRace = styled.div`
  background: #afafaf;
  opacity: .2;
  width: 80px;
  height: 13px;
`;

const Countdown = styled.div`
  background: #afafaf;
  opacity: .2;
  width: 30px;
  height: 13px;
`;

export function Loader() {
  return (
    <React.Fragment>
      <RaceEvent>
        <RaceEventIcon></RaceEventIcon>
        <RaceEventDetail>
          <RaceEventVenue></RaceEventVenue>
          <RaceEventRace></RaceEventRace>
        </RaceEventDetail>
        <Countdown></Countdown>
      </RaceEvent>
      <RaceEvent>
        <RaceEventIcon></RaceEventIcon>
        <RaceEventDetail>
          <RaceEventVenue></RaceEventVenue>
          <RaceEventRace></RaceEventRace>
        </RaceEventDetail>
        <Countdown></Countdown>
      </RaceEvent>
      <RaceEvent>
        <RaceEventIcon></RaceEventIcon>
        <RaceEventDetail>
          <RaceEventVenue></RaceEventVenue>
          <RaceEventRace></RaceEventRace>
        </RaceEventDetail>
        <Countdown></Countdown>
      </RaceEvent>
      <RaceEvent>
        <RaceEventIcon></RaceEventIcon>
        <RaceEventDetail>
          <RaceEventVenue></RaceEventVenue>
          <RaceEventRace></RaceEventRace>
        </RaceEventDetail>
        <Countdown></Countdown>
      </RaceEvent>
      <RaceEvent>
        <RaceEventIcon></RaceEventIcon>
        <RaceEventDetail>
          <RaceEventVenue></RaceEventVenue>
          <RaceEventRace></RaceEventRace>
        </RaceEventDetail>
        <Countdown></Countdown>
      </RaceEvent>
    </React.Fragment>
  )
}