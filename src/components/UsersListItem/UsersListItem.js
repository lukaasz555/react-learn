import React from 'react';
import PropTypes from 'prop-types';


const UsersListItem = ({ userData: {average = "TBA", name, result}}) => (
<li>        
    <div>{average}</div>
    <div>
        <p>{name}</p>
        <p>{result}</p>
    </div>
    <button>
        X
    </button>
</li>
)

UsersListItem.propTypes= {
    userData: PropTypes.shape({
        average: PropTypes.string,
        name: PropTypes.string.isRequired,
        result: PropTypes.string.isRequired
    })
}

export default UsersListItem;