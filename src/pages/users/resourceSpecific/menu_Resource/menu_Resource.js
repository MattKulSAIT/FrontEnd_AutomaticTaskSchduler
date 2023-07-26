import React from "react";

import './menu_Resource.css'

import ResourceMenu from '../../../../components/resourceMenu'
import PageHeader from'../../../../components/pageHeader'

/**
 * Menu Resource Page
 *  The page that shows the options the Resource can do
 */
function MenuResourcePage() {

    return (
        <div className="menuResourcePage">
            <div className="components">
                <div className="header">
                    <PageHeader/>
                </div>
                <div className="body">
                    <ResourceMenu/>
                </div>
            </div>
        </div>       
    );

}

export default MenuResourcePage;