import { useState, useRef } from "react";

const useTimer = (ini = 0) => {
  const [time, setTime] = useState({
    hrs: Math.floor(ini / 3600),
    min: Math.floor((ini % 3600) / 60),
    sec: ini % 60,
  });

  const isStart = useRef(false);
  const refInterval = useRef(null);
  const active = useRef(null);

  const startTimer = () => {
    if (isStart.current) return;
    refInterval.current = setInterval(() => {
      setTime((prev) => {
        let { hrs, min, sec } = prev;
        sec += 1;
        if (sec >= 60) {
          sec = 0;
          min += 1;
        }
        if (min >= 60) {
          min = 0;
          hrs += 1;
        }
        return { hrs, min, sec };
      });
    }, 1000);
    if (active.current) active.current.disabled = true;
    isStart.current = true;
  };

  const stopTimer = () => {
    clearInterval(refInterval.current);
    if (active.current) active.current.disabled = false;
    isStart.current = false;
  };

  const resetTimer = () => {
    clearInterval(refInterval.current);
    setTime({ hrs: 0, min: 0, sec: 0 });
    if (active.current) active.current.disabled = false;
    isStart.current = false;
  };

  return { time, startTimer, stopTimer, resetTimer, active };
};

export default useTimer;
