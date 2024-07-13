import PropTypes from "prop-types";
function UserGreetings(props){
    
        if(props.isLoggedIn){
            return <h2 className="welcome-message">Welcome {props.username}</h2>
        }
        else{
            return <h2 className="login-prompt">Please log in to continue</h2>
        }
    
}
UserGreetings.propTypes = {
    // age: PropTypes.number.isRequired,
    // position: PropTypes.string.isRequired,
    isLoggedIn : PropTypes.bool.isRequired,
    username: PropTypes.string.isRequired
};


export default UserGreetings;