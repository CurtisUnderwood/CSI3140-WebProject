import React from "react";
import "../styles.css";
import { useTimer } from "react-timer-hook";

function Timer({ durationSeconds = 60, handleExpire = () => {} }) {
  function getExpiryTimestamp() {
    const time = new Date();
    time.setSeconds(time.getSeconds() + durationSeconds);
    return time;
  }
  const { seconds, minutes } = useTimer({
    expiryTimestamp: getExpiryTimestamp(),
    autoStart: true,
    onExpire: handleExpire,
  });

  return (
    <div className="heading timer">
      <span>{minutes}</span>:
      <span>{!seconds ? "00" : "" + seconds < 10 ? "0" : "" + seconds}</span>
    </div>
  );
}
export { Timer };
