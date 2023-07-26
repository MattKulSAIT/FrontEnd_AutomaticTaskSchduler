import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function RescSkillRole() {


    const [deskCheck, setDesk] = useState("tempYes");
    const [dataCheck, setData] = useState("tempYes");
    const [netCheck, setNet] = useState("tempNo");
    const [mobileCheck, setMobile] = useState("tempYes");
    const [role, setRole] = useState("tempAdmin");
    const { id } = useParams();

    useEffect(() => {
        fetchData();
    }, []);

    const handleSkills = (skill) => {
        if (skill === 0) {
            return "No";
        } else if (skill === 1) {
            return "Yes";
        }
    }

    const handleRole = (role) => {
        if (role === 2) {
            return "Resource";
        } else if (role === 1) {
            return "Admin";
        }
    }

    const fetchData = async () => {
        try {
            const response = await fetch(`http://localhost:8080/resourceView/${id}`); //it used id because thats what was using the App.js
            if (response.ok) {
                const data = await response.json();
                setDesk(handleSkills(data.deskSkill));
                setData(handleSkills(data.dataSkill));
                setNet(handleSkills(data.netSkill));
                setMobile(handleSkills(data.mobileSkill));
                setRole(handleRole(data.role));
            } else {
                throw new Error('Failed to fetch data');
            }
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className='rescSkillRole'>
            <form method='GET' action={fetchData}>
                <table align='left' className='tableComp'>
                    <tr>
                        <th id='rescTableTitle'>Skills and Role:</th>
                    </tr>
                    <tr>
                        <td id='rescHelpdeskCheck'>Help Desk: {deskCheck}</td>
                        <td id='rescDatabaseCheck'>Database: {dataCheck}</td>
                    </tr>
                    <tr>
                        <td id='rescNetworkCheck'>Network: {netCheck}</td>
                        <td id='rescTelecommCheck'>Mobile: {mobileCheck}</td>
                    </tr>
                    <tr>
                        <td id='rescRole'>Role: {role}</td>
                    </tr>
                </table>
            </form>
        </div>
    );
}

export default RescSkillRole;