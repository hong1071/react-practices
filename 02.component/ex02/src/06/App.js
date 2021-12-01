import React, {Fragment} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faBell, faCheckCircle, faTimesCircle} from '@fortawesome/free-solid-svg-icons';

// additional..  꼭 필요하지 않음!
import {library} from '@fortawesome/fontawesome-svg-core';
import {far} from '@fortawesome/free-regular-svg-icons';
import {fab} from '@fortawesome/free-brands-svg-icons';

export default function() {
    library.add(faBell, far, fab);
    return (
        <div>
            {/* examples */}
            <FontAwesomeIcon icon={faBell} />
            <FontAwesomeIcon icon={faCheckCircle} />
            <FontAwesomeIcon icon={faTimesCircle} />
            <br />
            {/* solid */}
            <FontAwesomeIcon icon={["fas", "bell"]} />
            <FontAwesomeIcon icon={"bell"} />
            <br />
            {/* regular */}
            <FontAwesomeIcon icon={["far", "bell"]} />
            <br />
            {/* brand */}
            <FontAwesomeIcon icon={["fab", "github"]} />
            <FontAwesomeIcon icon={["fab", "apple"]} />
            <FontAwesomeIcon icon={["fab", "google"]} />

        </div>
    )
}