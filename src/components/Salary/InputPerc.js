import React, { Component } from 'react';

export default class InputPerc extends Component {
  render() {
    let value = new Intl.NumberFormat('br-BR', {
      style: 'percent',
      currency: 'BRL',
      maximumFractionDigits: 2,
    }).format(this.props.value);
    return (
      <div style={divPercent}>
        <div>( {value} )</div>
      </div>
    );
  }
}

const divPercent = {
  display: 'flex',
  flexWrap: 'nowrap',
  justifyContent: 'flex-start',
  alignItems: 'center',
};
