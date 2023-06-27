import React from "react";
import './menu_Admin.css'
import PageHeader from "../../../../components/pageHeader";

import AdminMenu from "../../../../components/adminMenu";

function MenuResource() {
    return (
        <div>
            <div className="header">
                //PagHeader
            </div>
            <div className="body">
                <AdminMenu/>
            </div>   
        </div>
    );
}

export default MenuResource;