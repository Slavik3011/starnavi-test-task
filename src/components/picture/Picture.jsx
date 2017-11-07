import React from 'react';
import { connect } from 'react-redux'

import './picture.sass'

export default ({ src, id, activePicture, setActivePicture }) => {
    const setActive = () => {
        setActivePicture(id);
        console.log(id)
    };

    return (
        <li className={ `picture ${id == activePicture ? 'active' : ''}`}>
            <div>
                <img src={src} onClick={setActive}/>
                {/*{src}*/}
            </div>
        </li>
    )
};