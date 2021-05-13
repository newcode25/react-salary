import React, { Component } from 'react';
import InputReadOnly from './InputReadOnly';
import { calculateSalaryFrom } from './salary';
import InputPerc from './InputPerc';

export default class InputFullSalary extends Component {
  constructor() {
    super();

    this.state = {
      fullSalary: 1000,
      baseINSS: 1000,
      discountINSS: 75,
      percINSS: 0.075,
      baseIRPF: 925,
      discountIRPF: 0,
      percIRPF: 0,
      netSalary: 925,
      percSalary: 0.925,
    };
  }

  handleChange = (event) => {
    const test = calculateSalaryFrom(event.target.value);
    const {
      baseINSS,
      discountINSS,
      percINSS,
      baseIRPF,
      discountIRPF,
      percIRPF,
      netSalary,
      percSalary,
    } = test;
    this.setState({
      fullSalary: event.target.value,
      baseINSS,
      discountINSS,
      percINSS,
      baseIRPF,
      discountIRPF,
      percIRPF,
      netSalary,
      percSalary,
    });
    //console.log(test.baseINSS);
  };

  render() {
    const {
      fullSalary,
      baseINSS,
      discountINSS,
      percINSS,
      baseIRPF,
      discountIRPF,
      percIRPF,
      netSalary,
      percSalary,
    } = this.state;
    return (
      <div>
        <h2 style={title}>React Salário</h2>
        <hr />
        <div style={divSalary}>
          <label>
            Salário
            <input
              className="input-field col s6"
              type="number"
              min="1000"
              max="99999"
              autoFocus
              step="100"
              value={fullSalary}
              onChange={this.handleChange}
            />
          </label>
        </div>
        <div style={divWrappBox}>
          <InputReadOnly value={baseINSS} label="Base INSS" />
          <InputReadOnly value={discountINSS} label="Desconto INSS" />
          <InputPerc value={percINSS} />
        </div>
        <div style={divWrappBox}>
          <InputReadOnly value={baseIRPF} label="Base IRPF" />
          <InputReadOnly value={discountIRPF} label="Desconto IRPF" />
          <InputPerc value={percIRPF} />
        </div>
        <div style={divWrappFullBox}>
          <InputReadOnly value={netSalary} label="Salário líquido" />
          <InputPerc value={percSalary} />
        </div>
      </div>
    );
  }
}

const title = {
  display: 'flex',
  justifyContent: 'center',
};
const divSalary = {
  display: 'flex',
  maxWidth: '50%',
  margin: '30px 20px',
};
const divWrappBox = {
  display: 'flex',
  justifyContent: 'flex-start',
  maxWidth: '90%',
  margin: '20px',
};

const divWrappFullBox = {
  display: 'flex',
  justifyContent: 'flex-start',
  maxWidth: '100%',
  width: '100%',
  margin: '20px',
};
