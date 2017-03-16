import React from 'react';

const DisplayField = ({ npcTalk }) => (
  <div>
    {npcTalk}
  </div>
);

DisplayField.propTypes = {
  npcTalk: React.PropTypes.string
};

DisplayField.defaultProps = {
  npcTalk: '開始！'
};

export default DisplayField;
