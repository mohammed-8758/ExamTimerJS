import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

export default function Timer() {
    const [searchParams] = useSearchParams();
    const questionNum = searchParams.get("questions");
    const timeLength = searchParams.get("time");
    const navigate = useNavigate();

    var countDownTime = timeLength * 60;
    
    const questionTime = countDownTime / questionNum;

    const [timePast, setTimePast] = useState(0);
    const [time, setTime] = useState(countDownTime);
    const [curQuestion, setCurQuestion] = useState(1);
    
    useEffect(() => {
      if (time <= 0) return;

      const interval = setInterval(() => {
        setTimePast(curTime => curTime + 1);
        if (timePast == questionTime) {
            setCurQuestion(curQuest => curQuest + 1);
            setTimePast(0);
        }
        setTime(prevTime => prevTime - 1);
      }, 1000);

      return() => clearInterval(interval);
    }, [time]);

    const hours = Math.floor(time / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = time % 60;

    return (
        <div className="Timer">
            <h2>Time Remaining: {hours.toString().padStart(2, '0')}h {minutes.toString().padStart(2, '0')}m {seconds.toString().padStart(2, '0')}s </h2>
            <h2>You should be up to question: {curQuestion}</h2>
        </div>
    )
}