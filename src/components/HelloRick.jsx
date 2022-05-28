import React from "react";

function HelloRick(prop) {
  return (
    // <div className="main">
    //   <p>Hello World</p>
    // </div>

    React.createElement(
      "div",
      { className: "main" },
      React.createElement("p", null, '"Hello World"')
    )
  );
}

export default HelloRick