import { useEffect, useState } from "react";

export default function AppTime(){
  const [time, setTime] = useState(new Date());
  useEffect(() =>{
    const interalId = setInterval(() => {
      setTime(new Date());
    },1000);
     
    return () => {
      clearInterval(interalId);
    }
  })
  return <p className="lead">This is the current time: {time.toLocaleDateString()} - {time.toLocaleTimeString()}</p>
}