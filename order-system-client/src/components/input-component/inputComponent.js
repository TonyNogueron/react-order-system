import React from "react";

class Input extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: props.value };
    this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

  render() {
    return (
      <div className="Folio">
        <h1>{this.props.title}</h1>
        <div className="wrapper">
          <input
            type="text"
            className="num"
            value={this.state.value}
            placeholder="Ingrese el num. de folio."
            onChange={this.handleChange}
          />
        </div>
      </div>
    );
  }

  getValue(){
    return this.state.value;
  }
}

export default Input;