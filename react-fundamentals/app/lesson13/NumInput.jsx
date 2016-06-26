import React from 'react';

class NumInput extends React.Component { 
  getLabel() {
    if(this.props.label !== '') {
      return <label>{this.props.label} - {this.props.val}</label>
    }
    return '';
  }
  onChange(e) {
    this.props.update({
        label: this.props.label,
        value: e.target.value
    });
  }
  render() {
    return (
      <div>
      <input ref="inp"
             type={this.props.type}
             min={this.props.min}
             max={this.props.max}
             step={this.props.step}
             defaultValue={this.props.val}
             onChange={this.onChange.bind(this)} />
      {this.getLabel()}
      </div>
    );
  }
}

NumInput.propTypes = {
  min: React.PropTypes.number,
  max: React.PropTypes.number,
  step: React.PropTypes.number,
  val: React.PropTypes.number,
  label: React.PropTypes.string,
  update: React.PropTypes.func.isRequired,
  type: React.PropTypes.oneOf(['number', 'range'])
};

NumInput.defaultProps = {
  min: 0,
  max: 0,
  step: 1,
  val: 0,
  label: '',
  type: 'range'
};

export default NumInput;