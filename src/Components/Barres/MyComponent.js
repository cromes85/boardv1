import React from "react";

import Component2 from "../../Pages/InfosMagasins";

class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showComponent2: false,
    };
  }

  handleButtonClick = () => {
    this.setState((prevState) => ({
      showComponent2: !prevState.showComponent2,
    }));
  };

  render() {
    return (
      <div style={{ display: "flex", justifyContent: "end" }}>
        <button
          onClick={this.handleButtonClick}
          target="_blank"
          rel="noopener noreferrer"
        >
          Infos Magasins
        </button>
        {this.state.showComponent2 && <Component2 />}
      </div>
    );
  }
}

export default MyComponent;
