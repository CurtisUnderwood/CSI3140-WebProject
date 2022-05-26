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
    onExpire: () => console.log("Timer expired!"),
  });

  return (
    <div className="heading timer">
      <span>{minutes}</span>:
      <span>{!seconds ? "00" : "" + seconds < 10 ? "0" : "" + seconds}</span>
    </div>
  );
}
export { Timer };
