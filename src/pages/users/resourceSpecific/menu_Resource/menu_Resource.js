import React from "react";
import './menu_Resource.css'
import PageHeader from "../../../../components/pageHeader";

import ResourceMenu from '../../../../components/resourceMenu'

function MenuResource() {
    return (
        <div>
            <div className="header">
                //PagHeader
            </div>
            <div className="body">
                <ResourceMenu/>
            </div>   
        </div>
    );
}

export default MenuResource;