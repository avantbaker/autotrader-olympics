import React, { Fragment} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';


const ProfileIcon = () => {
    return (
        <Fragment>
            <Link to="/edit">
                <FontAwesomeIcon className="profileIcon" size="2x" icon={faUser} />
            </Link>
        </Fragment>
    )
}

export default ProfileIcon;