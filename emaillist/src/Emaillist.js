import React from 'react';
import styles from './assets/scss/Emaillist.scss';
import Email from './Email';

const Emaillist = () => {
    return (
        <div>
            <ul className={styles.Emaillist}>
                <Email />
                <Email />
                <Email />
            </ul>
        </div>
    );
};

export default Emaillist;