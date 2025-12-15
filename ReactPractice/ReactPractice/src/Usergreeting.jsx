import PropTypes from "prop-types";
function Usergreeting(props){
    //conditinal renderring
    const welcomeMessage = <h2 className="welcome-message">
        Welcome {props.username}</h2>
    const loginPrompt = <h2 className="login-prompt">
    Please Login to Continue</h2>
    return(props.isLoggedIn ? welcomeMessage : loginPrompt);
    // if(props.isLoggedIn){
    //     return <h2 className="welcome-message">Welcome {props.username}</h2>
    // }
    // else{
    //     return <h2 className="login-prompt">Please Login to Continue</h2>
    // }

}
Usergreeting.proptypes ={
    isLoggedIn: PropTypes.bool,
    username: PropTypes.string
}
Usergreeting.defaultProps={
    isLoggedIn: false,
    username: "Guest"
}
//also can use Ternanry Operator
// return props.isLoggedIn ? <h2>Weclome</h2> : <h2>Please Login</h2>
export default Usergreeting