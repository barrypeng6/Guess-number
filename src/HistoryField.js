import React from 'react';

const HistoryField = ({ historyCode }) => (
  <div>
    {`已選號碼: ${historyCode}`}
  </div>
);

HistoryField.propTypes = {
  historyCode: React.PropTypes.arrayOf(React.PropTypes.number)
};

HistoryField.defaultProps = {
  historyCode: []
};

export default HistoryField;
