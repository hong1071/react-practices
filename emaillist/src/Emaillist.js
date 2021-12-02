import React from 'react';
import styles from './assets/scss/Emaillist.scss';
import Email from './Email';

const Emaillist = (emails) => {
    return (
        <ul className={styles.Emaillist}>
            {
                emails.map((e) => <Email 
                                        key={emails.no} 
                                        firstName={emails.firstName} 
                                        lastName={emails.lastName} 
                                        email={emails.email} />)
            }
        </ul>
    );
};

export default Emaillist;