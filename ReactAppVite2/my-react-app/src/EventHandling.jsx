function EventHandling(){
    function clickFun(){
        alert("This is an alert")
    }
    return(
        <div>
            <h2>Event Handling Component</h2>
        <button onClick={clickFun}>Click Here</button>
        </div>
    )
}export default EventHandling