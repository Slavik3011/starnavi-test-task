import React from 'react';
import { connect } from 'react-redux'

import './picture.sass'

export default class Picture extends React.Component {
    constructor() {
        super();

        this.setActive = this.setActive.bind(this);
        this.load = this.load.bind(this);

        this.state = {
            load: false
        }
    }

    setActive() {
        let { setActivePicture, id } = this.props;
        setActivePicture(id);
    }

    load() {
        this.setState({
            load: true
        })
    }


    render() {
        let { id, activePicture, src } = this.props;
        return (
            <li className={ `picture ${id == activePicture ? 'active' : ''}`}>
                <div>
                    <img className={this.state.load ? 'loaded': ''} src={src} onClick={this.setActive} onLoad={this.load} />
                </div>
                {this.state.load ? '' : <div className="preloader"></div>}
            </li>
        )
    }
}

// export default ({ src, id, activePicture, setActivePicture }) => {
//     const setActive = () => {
//         setActivePicture(id);
//     };
//
//     return (
//         <li className={ `picture ${id == activePicture ? 'active' : ''}`}>
//             <div>
//                 <img src={src} onClick={setActive}/>
//             </div>
//         </li>
//     )
// };