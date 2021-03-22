import React from 'react';
import '../../styles/login.scss';


const backdrop = (props) => (
    props.show === true ? <div className="back_div" onClick={props.clicked}></div> : null
)

export default backdrop;