import React, { useState } from 'react';

const Time = () => {
  const now = new Date().toLocaleTimeString();
  const [time, setTime] = useState(now);
  function getTime () {
    setTime(now);
  }
  
  setInterval(getTime, 1000)
  return (
    <div>
      {time}
    </div>
  )
}

export default Time;