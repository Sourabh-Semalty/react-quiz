import React, { useEffect } from "react";

export default function Timer({ secondsRemaining, dispatch }) {
  // if(secondsRemaining === 0) dispatch({type:'finish'})
  const mins = Math.floor(secondsRemaining / 60);
  const seconds = secondsRemaining % 60;
  useEffect(() => {
    const timer = setInterval(() => {
      dispatch({ type: "tick" });
      console.log("tick");
    }, 1000);
    return () => clearInterval(timer);
  }, [dispatch]);

  return (
    <div className="timer">
      {mins < 10 ? "0" : ""}
      {mins}: {seconds < 10 ? "0": ""}{seconds}
    </div>
  );
}
