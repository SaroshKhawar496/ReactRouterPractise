/* HOCs add features to a component. They shouldn’t drastically alter its contract.
It’s expected that the component returned from a HOC has a similar interface to 
the wrapped component.
HOCs should pass through props that are unrelated to its specific concern */

import React from "react";

//recieving the component passed via param
const Rainbow = WrappedComponent => {
  //array of random colors
  const colours = ["red", "pink", "orange", "blue", "green", "yellow"];
  const randomColour = colours[Math.floor(Math.random() * colours.length)];

  const className = randomColour + "-text"; //in materialized css, its eg red-text

  return props => {
    return (
      <div className={className}>
        {/* ...props are passThroughProps */}
        <WrappedComponent {...props} />
      </div>
    );
  };
};
export default Rainbow;
