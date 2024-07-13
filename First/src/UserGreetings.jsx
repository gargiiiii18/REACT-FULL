import PropTypes from "prop-types";
function UserGreetings(props){
    
        if(props.isLoggedIn){
            return <h2>Welcome {props.username}</h2>
        }
    
}
UserGreetings.propTypes = {
    // age: PropTypes.number.isRequired,
    // position: PropTypes.string.isRequired,
    isLoggedIn : PropTypes.bool.isRequired,
    username: PropTypes.string.isRequired
};


export default UserGreetings;