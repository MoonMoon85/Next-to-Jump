import React from 'react'
import styled from 'styled-components';
import PropTypes from 'prop-types'
import Icon from "../icons";
import { getDifference } from '../utils/timer'

const RaceEvent = styled.div`
  className: 'RaceEvent';
  border-right: 1px solid #ebedf5;
  background: #fff;
  line-height: 1.4;
  font-size: 12px;
  font-weight: 400;
`;

const RaceEventLink = styled.a`
  display: flex;
  align-items: center;
  flex: 1;
  justify-content: flex-start;
  padding: 10px;
`;

const RaceEventDetail = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 5px;
`;

const RaceEventVenue = styled.div`
  overflow: hidden;
  text-overflow: ellipsis;
  width: 80px;
  height: 13px;
  white-space: nowrap;
  color: #652f9c;
`;

const RaceEventRace = styled.div`
  display: flex;
  font-weight: 400;
  align-items: center;
  color: #afafaf;
`;

const Countdown = styled.div`
  color: ${(props) => props.timeLeft < 10 ? '#dc0000' : "#652f9c"};
`;

const RaceEventIcon = styled.div`
  display: flex;
  align-items: center;
`;

export function Tile(props) {
  const [timeLeft, setTimeLeft] = React.useState(null)

  React.useEffect(() => {
    window.setInterval(() => {
      setTimeLeft(getDifference(props.time))
    }, 1000)
  }, [])

  return (
    <RaceEvent>
      <RaceEventLink
        href={props.link}
      >
        <RaceEventIcon>
          <Icon name={props.icon}></Icon>
        </RaceEventIcon>
        <RaceEventDetail>
          <RaceEventVenue>{props.venue}</RaceEventVenue>
          <RaceEventRace><span>Race {props.number}</span></RaceEventRace>
        </RaceEventDetail>
        <Countdown>{timeLeft}</Countdown>
      </RaceEventLink>
    </RaceEvent>
  )
}

Tile.propTypes = {
  link: PropTypes.string.isRequired,
  venue: PropTypes.string.isRequired,
  number: PropTypes.number.isRequired,
  time: PropTypes.string.isRequired
}