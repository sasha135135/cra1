import React from 'react';
import SiteName from "./SiteName";


function Footer(props) {
    return (
        <div>
            --- {props.name} {props.menu} FOOTER <SiteName /> ---
        </div>


    );
}

export default Footer;
