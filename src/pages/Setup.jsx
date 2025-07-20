import TimeSel from "../components/TimeSel";
import { useState } from "react";

export default function Setup() {
    const [timeCount, setTimeCount] = useState(0);

    return (
        <div className="Setup">
            <h2>How long is your exam?</h2>
            <TimeSel onSubmit={setTimeCount} />
        </div>
    )
}