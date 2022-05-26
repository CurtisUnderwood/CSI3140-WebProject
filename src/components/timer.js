import React from "react";
import "./css/heading.css";
import { useTimer } from "react-timer-hook";

function Timer({ durationSeconds = 60, start = true, onExpire = () => {} }) {
  function getExpiryTimestamp() {
    const time = new Date();
    time.setSeconds(time.getSeconds() + durationSeconds);
    return time;
  }
  const { seconds, minutes } = useTimer({
    expiryTimestamp: getExpiryTimestamp(),
    autoStart: start,
    onExpire: () => console.warn("onExpire called"),
  });

  return (
    <div className="heading timer">
      <span>{minutes}</span>:<span>{seconds}</span>
    </div>
  );
}
export { Timer };
