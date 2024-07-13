import PropTypes from "prop-types";
function UserGreetings(props){
    
        if(props.isLoggedIn){
            return <h2 className="welcome-message">Welcome {props.username}</h2>
        }
        else{
            return <h2 className="login-prompt">Please log in to continue</h2>
        }
    // This might look too verbose. So another way of displaying these two is : 
    // const welcomeMessage = <h2 className="welcome-message">
    //                        Welcome {props.username}
    //                        </h2>

    // const loginPrompt = <h2 className="login-prompt">
                    //   Please log in to continue
                    //      </h2>

        // return (props.isLoggedIn ? welcomeMessage : loginPrompt);

}
UserGreetings.propTypes = {
    // age: PropTypes.number.isRequired,
    // position: PropTypes.string.isRequired,
    isLoggedIn : PropTypes.bool.isRequired,
    username: PropTypes.string.isRequired
};

UserGreetings.defaultProps = {
    isLoggedIn : false,
    username : "Guest"

}


export default UserGreetings;