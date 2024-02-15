function ClockTime(){

    let time =new Date()

    return <p>The current Time is : {time.toLocaleDateString()} - {time.toLocaleTimeString()}</p>
}
export default ClockTime;