import { useState, useEffect } from "react";
import "./Timer.css";

const Timer = () => {
    const [time, setTime] = useState(0);
    const [running, setRunning] = useState(false);

    useEffect(() => {
        if (!running) return;

        const interval = setInterval(() => {
            setTime((prev) => prev + 10);
        }, 10);

        return () => clearInterval(interval);
    }, [running]);

    const formatTime = (ms) => {
        const minutes = Math.floor(ms / 60000);
        const seconds = Math.floor((ms % 60000) / 1000);
        const milliseconds = Math.floor((ms % 1000) / 10);

        return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(
            2,
            "0"
        )}:${String(milliseconds).padStart(2, "0")}`;
    };

    return (
        <div className="section" id="timer">
            <div className="box">
                <div className="timer">{formatTime(time)}</div>
                <button onClick={() => setRunning(true)}>Start</button>
                <button onClick={() => setRunning(false)}>Stop</button>
                <button
                    onClick={() => {
                        setRunning(false);
                        setTime(0);
                    }}
                >
                    Reset
                </button>
            </div>
        </div>
    );
};

export default Timer;