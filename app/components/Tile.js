import React from 'react'
import PropTypes from 'prop-types'
import { getDifference } from '../utils/timer'

export function Tile(props) {
  const [timeLeft, setTimeLeft] = React.useState(null)

  React.useEffect(() => {
    window.setInterval(() => {
      setTimeLeft(getDifference(props.time))
    }, 1000)
  }, [])
  
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
          <span className="Countdown__countdown--4vRpD Countdown__imminent--2yc2K" >{timeLeft}</span>
        </div>
      </a>
    </div>
  )
}

Tile.propTypes = {
  link: PropTypes.string.isRequired,
  venue: PropTypes.string.isRequired,
  number: PropTypes.number.isRequired,
  time: PropTypes.string.isRequired
}