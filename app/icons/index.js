import React from "react";

import Thoroughbred from "./Thoroughbred";
import Greyhounds from "./Greyhounds";
import Trots from "./Trots";

const Icon = props => {
  switch (props.name) {
    case "Thoroughbred":
      return <Thoroughbred {...props} />;
    case "Greyhounds":
      return <Greyhounds {...props} />;
    case "Trots":
      return <Trots {...props} />;
    default:
      return;
  }
};

export default Icon;