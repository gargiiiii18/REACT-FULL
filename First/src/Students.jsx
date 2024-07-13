import PropTypes from 'prop-types';

function Students(props) {
    return (
        <div className="student">
            <p>Name: {props.name}</p>
            <p>Age: {props.age}</p>
            <p>Position: {props.position}</p>
            <p>Is he the best young player: {props.isBestYoungPlayer ? "Yes" : "No"}</p>
        </div>
    );
}

Students.propTypes = {
    name: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired,
    position: PropTypes.string.isRequired,
    isBestYoungPlayer : PropTypes.bool.isRequired
};


export default Students;
