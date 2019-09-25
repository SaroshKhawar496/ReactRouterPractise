import React from "react";

const Contact = props => {
  //Programmatic Redirect. Using the props automatically attached by the react-router.
  //props has a history object passed by the router
  // setTimeout(() => {
  //   props.history.push("/about");
  // }, 2000);
  return (
    <div className="container">
      <h4 className="center">Contact</h4>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea esse
        accusantium laudantium ex nulla earum iste quae illo porro deserunt
        doloremque excepturi, architecto sapiente, aperiam hic exercitationem
        possimus. Vero, qui!
      </p>
    </div>
  );
};

export default Contact;
