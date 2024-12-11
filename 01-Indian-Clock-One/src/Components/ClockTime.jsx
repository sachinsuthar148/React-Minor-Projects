import { useEffect } from "react";
import { useState } from "react";

function ClockTime() {

    const [time, setTime] = useState(new Date())

    useEffect(() => {
        let intervalID = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => {
            clearInterval(intervalID);
            console.log("ended");
        };
    },[])


    return (<p>The current Time is : {time.toLocaleDateString()} - {time.toLocaleTimeString()}</p>);
}
export default ClockTime;