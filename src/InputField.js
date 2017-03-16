import React from 'react';

const InputField = ({ value, isGameOver, onChangeValue, onSubmitValue, warning }) => (
  <div>
    <form onSubmit={event => onSubmitValue(event)}>
      <input
        autoFocus
        disabled={isGameOver}
        type="number"
        placeholder="輸入一個號碼"
        value={value}
        onChange={event => onChangeValue(event)}
      />
      <input
        disabled={isGameOver}
        type="submit"
        value="確定"
      />
      <em>{warning}</em>
    </form>
  </div>
);

InputField.propTypes = {
  value: React.PropTypes.string,
  isGameOver: React.PropTypes.bool.isRequired,
  onChangeValue: React.PropTypes.func.isRequired,
  onSubmitValue: React.PropTypes.func.isRequired,
  warning: React.PropTypes.string
};

InputField.defaultProps = {
  value: '',
  warning: ''
};

export default InputField;
