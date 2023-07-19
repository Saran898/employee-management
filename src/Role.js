import React, { Component } from 'react';

class Role extends Component {
  state = {
    inputValue: '',
  };

  handleChange = (event) => {
    this.setState({ inputValue: event.target.value });
  };

  render() {
    const { inputValue } = this.state;

    return (
      <div>
        <h2>Welcome to the Home Page</h2>
        <div>
          <input
            type="text"
            value={inputValue}
            onChange={this.handleChange}
            placeholder="Enter something..."
          />
        </div>
        <p>You typed: {inputValue}</p>
      </div>
    );
  }
}

export default Role;