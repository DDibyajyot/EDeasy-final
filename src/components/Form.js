import React, { Component } from 'react';
// import './styles.css';

class Form extends React.Component {
  render() {
    return (
      <div id="Form">
        <h3>How many fishes do you want to fish today?</h3>  
        <form onSubmit={this.props.handleFormSubmit}>
          <label for="fishes">
          Number of Fishes:
          <input id="fishes" value={this.props.newFishes} 
            type="text" name="fishes"
            onChange={this.props.handleInputChange} />
          </label>
          {/* <label for="password">
          Password:
          <input id="password" value={this.props.newPassword} 
            type="password" name="password"
            onChange={this.props.handleInputChange} />
          </label> */}
          <button type="submit" value="Submit">Add Item</button>
        </form>
      </div>
    );
  }
}

export default Form;