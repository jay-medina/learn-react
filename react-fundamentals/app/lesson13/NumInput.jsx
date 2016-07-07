import * as React from 'react';

class NumInput extends React.Component {
  static get propTypes() {
    return {
      min: React.PropTypes.number,
      max: React.PropTypes.number,
      step: React.PropTypes.number,
      val: React.PropTypes.number,
      label: React.PropTypes.string,
      update: React.PropTypes.func.isRequired,
      type: React.PropTypes.oneOf(['number', 'range'])
    };
  };

  static get defaultProps() {
    return {
      min: 0,
      max: 0,
      step: 1,
      val: 0,
      label: '',
      type: 'range'
    };
  }

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

export default NumInput;