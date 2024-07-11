import PropTypes from 'prop-types';

function Students(props) {
    return (
        <div className="student">
            <p>Name: {props.name}</p>
            <p>Age: {props.age}</p>
            <p>Is he the best young player: {props.isBestYoungPlayer ? "Yes" : "No"}</p>
        </div>
    );
}

Students.propTypes = {
    name: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired,
    isBestYoungPlayer : PropTypes.bool.isRequired
};


export default Students;
