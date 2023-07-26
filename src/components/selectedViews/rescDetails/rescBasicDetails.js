import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function RescBasicDetails() {

    const [rescName, setRescName] = useState("tempRescName");
    const [rescID, setRescID] = useState("tempRescID");
    const [rescPhone, setRescPhone] = useState("tempRescPhone");
    const [rescEmail, setRescEmail] = useState("tempRescEmail");
    const { id } = useParams();

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await fetch(`http://localhost:8080/resourceView/${id}`); //it used id because thats what was using the App.js
            if (response.ok) {
                const data = await response.json();
                setRescName(data.name);
                setRescID(id);
                setRescPhone(data.phoneNum);
                setRescEmail(data.email);
            } else {
                throw new Error('Failed to fetch data');
            }
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className='rescBasicDetails'>
            <form method="GET" action={fetchData}>
                <table align='left' className='tableComp'>
                    <tr>
                        <th id='rescTableTitle'>Basic Details:</th>
                    </tr>
                    <tr>
                        <td id='rescName'>Name: {rescName}</td>
                        <td id='rescID'>EmpID: {rescID}</td>
                    </tr>
                    <tr>
                        <td id='rescPhone'>Phone: {rescPhone}</td>
                        <td id='rescEmail'>Email: {rescEmail}</td>
                    </tr>
                </table>
            </form>
        </div>
    );
}

export default RescBasicDetails;