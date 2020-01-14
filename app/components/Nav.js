import React from 'react'
import styled from 'styled-components';
import PropTypes from 'prop-types'
import Icon from "../icons";

const NextToJumpFilter = styled.div`
  width: 250px;
  border-right: 1px solid #ebedf5;
  background-color: #fff;
  display: flex;
  padding: 10px;
`;

const Button = styled.button`
  border: 1px solid #652f9c;
  border-radius: 3px;
  color: #8935c0;
  flex: 1;
  height: 36px;
  text-transform: capitalize;
  cursor: pointer;
  display: inline-block;
  margin: 0 5px 0 0;
  outline: 0;
  padding: 0;
  position: relative;
  text-align: center;
  text-decoration: none;
  vertical-align: top;
  white-space: nowrap;
`;

export function Nav(props) {
  const [type, setType] = React.useState('1,2,3')

  return (
    <NextToJumpFilter>
      <Button onClick={() => setType('1,2,3')}>
        All
      </Button>
      <Button onClick={() => setType('1')}>
        <Icon
          name="Thoroughbred"
          fill="#652f9c"
          />
      </Button>
      <Button onClick={() => setType('2')}>
        <Icon
          name="Greyhounds"
          fill="#652f9c"
          />
      </Button>
      <Button onClick={() => setType('3')}>
        <Icon
          name="Trots"
          fill="#652f9c"
          />
      </Button>
    </NextToJumpFilter>
  )
}