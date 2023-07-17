import React from "react";
import './menu_Admin.css'

import AdminMenu from "../../../../components/adminMenu";
import PageHeader from'../../../../components/pageHeader'

function MenuAdmin() {
    return (
        <div>
            <PageHeader/>
            <AdminMenu/>
        </div>
    );
}

export default MenuAdmin;