import React from "react";
import './menu_Resource.css'

import ResourceMenu from '../../../../components/resourceMenu'
import PageHeader from'../../../../components/pageHeader'

function MenuResource() {
    return (
        <div>
            <PageHeader/>
            <ResourceMenu/>
        </div>
    );
}

export default MenuResource;