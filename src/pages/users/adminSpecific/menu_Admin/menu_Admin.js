import React from "react";

import './menu_Admin.css'

import AdminMenu from "../../../../components/adminMenu"
import PageHeader from '../../../../components/pageHeader'

/**
 * Menu Admin Page
 *  The page that shows the options the admin can do
 */
function MenuAdminPage() {

    return (
        <div className="menuAdminPage">
            <div className="components">
                <div className="header">
                    <PageHeader/>
                </div>
                <div className="body">
                    <AdminMenu/>
                </div>
            </div>            
        </div>
    );

}

export default MenuAdminPage;