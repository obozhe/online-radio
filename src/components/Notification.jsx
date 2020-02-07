import React from 'react';

const Notification = ({ isLoading }) => (
  <div className={`loading ${isLoading ? 'show' : ''}`}>
    bufferizing...&nbsp;
    <i className="icon-spin5 rotating" />
  </div>
);

export default Notification;
