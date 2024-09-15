import './Interest.css';
import React from "react";
import Link from "../../../components/Link/Link";

function Interest({name, link, title}) {
    return (
        <div className='interest'>
            <h3>{title}</h3>
            <ul className='remove-ul-bullet-point'>
                <Link link={link} linkName={name}></Link>
            </ul>
        </div>
    )
}

export default Interest;
