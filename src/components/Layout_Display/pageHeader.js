import React from 'react';
import ATlogo from '../../assets/AutoTaskerTemp_Final.png';

function PageHeader() {
    const ATname = 'AutoTask';
    let username = 'testName';

    return (
        <div className='pageHeader'>
            <div className='ATdisplay'>
                <img
                    id='ATlogo'
                    src={ATlogo} alt='AutoTask Logo'
                />
                <h1>{ATname}</h1>
            </div>
            <div className='Userdisplay'>
                <h1>{username}</h1>
            </div>
        </div>
    );
}

export default PageHeader;