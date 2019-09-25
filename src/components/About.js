import React from "react";
import Rainbow from "../components/hoc/Rainbow";

const About = () => {
  return (
    <div className="container">
      <h4 className="center">About</h4>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea esse
        accusantium laudantium ex nulla earum iste quae illo porro deserunt
        doloremque excepturi, architecto sapiente, aperiam hic exercitationem
        possimus. Vero, qui!
      </p>
    </div>
  );
};

export default Rainbow(About);
