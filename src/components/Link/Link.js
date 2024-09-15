import React from "react";

function Link({link, linkName }) {
    return (
        <li><a className='link' href={link} target="_blank">{linkName}</a></li>
    )
}

export default Link
