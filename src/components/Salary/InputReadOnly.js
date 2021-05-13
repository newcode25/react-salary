import React from 'react';

export default function InputReadOnly(props) {
  const formatValue = new Intl.NumberFormat('br-BR', {
    style: 'currency',
    currency: 'BRL',
    maximumFractionDigits: 2,
  }).format(props.value);
  return (
    <div>
      <label>{props.label} </label>
      <input type="number" value={props.value} />
    </div>
  );
}
