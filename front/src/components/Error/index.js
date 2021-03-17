import React from 'react';
import ErrorPage from 'src/assets/img/404-short.svg'
import './styles.scss';

const Error = () => {
    return(
        <>
            <img className="error" src={ErrorPage} alt="error-image" />
        </>
    );
};

export default Error;