import React, { useEffect, useState } from 'react';

import { useParams } from 'react-router-dom';

/**
 * resourceEdit Component (ADMIN)
 *  This is used to edit resource details on the selected resource
 */
const AdminEdit = () => {

    // Variables
    let rescID = '000123123'
    let rescName = 'John Doe'
    let editError = ''

    //saveEdit saves the changes of the resource
    const saveEdit = async () => {

    }

    //exitEdit cancels the changes to their previous values and returns to the General Resource Page
    function exitEdit() {
        window.location.href = 'http://localhost:3000/resourceGeneral_Admin';
    }

    // FrontEnd //

    return (
        <div className='resourceEdit'>
            <form method='GET' onSubmit={saveEdit}>
                <div className='mainPage'> 
                    <div className='titleHeaderDiv'>
                        <h1>{rescID} - {rescName}</h1>
                    </div>
                    <hr align="left"/>
                    <div className='rescDetailsDiv'>
                        <div className='rescFirstNameDiv'>
                            <h3>Change First Name</h3>
                            <input 
                                type='text' 
                                placeholder='Ex. John'
                                maxLength="20"
                                pattern='[A-Za-z]'
                                required
                                name="rescFirstName"
                            />
                        </div>
                        <div className='rescLastNameDiv'>
                            <h3>Change Last Name</h3>
                            <input 
                                type='text' 
                                placeholder='Ex. Doe'
                                maxLength="20"
                                pattern='[A-Za-z]'
                                required
                                name="rescLastName"
                            />
                        </div>
                        <div className='rescPhoneDiv'>
                            <h3>Change Phone</h3>
                            <input 
                                type='phone' 
                                placeholder='Ex. 123-123-1234' 
                                required
                                name="rescPhone"
                            />
                        </div>
                        <div className='rescEmailDiv'>
                            <h3>Change Email</h3>
                            <input 
                                type='email' 
                                placeholder='Ex. johnd@work.com' 
                                required
                                name="rescEmail"
                            />
                        </div>
                        <div className='passDiv'>
                            <h3>Change Password</h3>
                            <input 
                                type='text' 
                                placeholder='Ex. ***********' 
                                minLength="8"
                                maxLength="20"
                                required
                                name="rescPassword"
                            />
                        </div>
                    </div>
                    <hr align="left"/> 
                    <div className='editButtonsDiv'>
                        <button id='saveChanges' type="submit">Save Changes</button>
                        <button id='exitEdit' type="button" onClick={exitEdit}>Exit</button>
                    </div>        
                </div>
            </form>
            <div className='errorMessage'>
                {editError}
            </div>
        </div>
    );
}

export default AdminEdit;