import React, { useState } from 'react';

const Time = () => {
  const now = new Date().toLocaleTimeString();
  const [time, setTime] = useState(now);
  function getTime () {
    setTime(now);
  }
  
  setInterval(getTime, 1000)
  return (
    <div className=' bg-transparent w-32 px-5 rounded-md shadow-sm shadow-black '>
      <p className=' animate-pulse'>{time}</p>
    </div>
  )
}

export default Time;