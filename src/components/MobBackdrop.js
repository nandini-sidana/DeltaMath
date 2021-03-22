import React from 'react';
import '../styles/login.scss'


const MobBackdrop = (props) => (
    props.show === true ? <div className="mob_back_div" onClick={props.clicked}></div> : null
)

export default MobBackdrop;